import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Task, TaskPriority, TaskStatus } from "../types/task";

type CreateTaskPageProps = {
  onCreateTask: (task: Task) => void;
  editingTask?: Task | null;
};

const CreateTaskPage = ({ onCreateTask, editingTask }: CreateTaskPageProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("Todo");
  const [priority, setPriority] = useState<TaskPriority>("Low");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate ?? "");
    }
  }, [editingTask]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    setLoading(true);
    const taskData = { title: title.trim(), description: description.trim(), status, priority, dueDate: dueDate || undefined };

    try {
      const url = editingTask
        ? `http://localhost:5000/tasks/${editingTask._id}`
        : "http://localhost:5000/tasks";
      const method = editingTask ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });
      if (!response.ok) throw new Error();
      const savedTask = await response.json();
      onCreateTask(savedTask);
      navigate("/");
    } catch {
      setError("Failed to save task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="dashboard-container">
      <div className="ui-label">
        <h2>{editingTask ? "Edit Task" : "Create New Task"}</h2>
      </div>
      <section className="card">
        <h3>{editingTask ? "Update Task" : "New Task"}</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="state-msg error" style={{ marginBottom: "15px" }}>{error}</p>}
          <div className="form-group">
            <label className="form-label">Task Title *</label>
            <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What needs to be done?" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select className="input" value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Priority</label>
              <select className="input" value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Due Date</label>
            <input type="date" className="input" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="input" style={{ minHeight: "120px" }} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task details..." />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "8px" }}>
            <button type="button" onClick={() => navigate("/")} style={{ background: "none", border: "1px solid #d1d5db", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>Cancel</button>
            <button type="submit" disabled={loading} style={{ backgroundColor: "#111827", color: "white", padding: "10px 30px", borderRadius: "6px", border: "none", fontWeight: "600", cursor: "pointer" }}>
              {loading ? "Saving..." : editingTask ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateTaskPage;
