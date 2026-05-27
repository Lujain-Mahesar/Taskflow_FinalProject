import express from "express";
import { getTasks, createTask, deleteTask } from "../controllers/taskController";
import { validateTask } from "../middleware/validateTask"; // Import your new work

const router = express.Router();

router.get("/", getTasks);

// Use the validateTask middleware here for Commit 9
router.post("/", validateTask, createTask); 

router.delete("/:id", deleteTask);

export default router;