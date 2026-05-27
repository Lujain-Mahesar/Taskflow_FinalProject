import { Request, Response } from "express";
import Task from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { priority } = req.query;
    const filter: any = {};
    if (priority) filter.priority = priority;
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// --- YOUR WORK: Commit 7 (Added Data Trimming & Enhanced POST logic) ---
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    // YOUR FEATURE: Trim whitespace from title so tasks don't have leading/trailing spaces
    const cleanTitle = title?.trim();
    const cleanDescription = description?.trim();

    if (!cleanTitle || !cleanDescription) {
      return res.status(400).json({ message: "Title and description are required and cannot be empty spaces" });
    }

    const task = new Task({ title: cleanTitle, description: cleanDescription, status, priority, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// --- YOUR WORK: Commit 8 (Added ID Validation & Enhanced DELETE logic) ---
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // YOUR FEATURE: Check if the ID is a valid MongoDB ObjectId to prevent server crash
    if (id.length !== 24) {
      return res.status(400).json({ message: "Invalid Task ID format" });
    }

    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};