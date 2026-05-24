import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import TaskCard from "../components/TaskCard";
import PriorityFilter from "../components/PriorityFilter";

function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [priority, setPriority] = useState("");

  const fetchTasks = (priorityFilter: string) => {
    setLoading(true);
    setError("");
    const url = priorityFilter
      ? `http://localhost:5000/tasks?priority=${priorityFilter}`
      : "http://localhost:5000/tasks";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load tasks. Make sure the server is running.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTasks(priority);
  }, [priority]);

  const handleDelete = (id: string) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks((prev) => prev.filter((t) => t._id !== id)))
      .catch(() => alert("Failed to delete task."));
  };

  return (
    <main className="dashboard-container">
      <div className="ui-label">
        <h2>My Tasks</h2>
      </div>
      <section className="card">
        <h3>Task List</h3>
        <PriorityFilter selected={priority} onChange={setPriority} />
        <div className="task-container">
          {loading && <p className="state-msg">Loading tasks...</p>}
          {error && <p className="state-msg error">{error}</p>}
          {!loading && !error && tasks.length === 0 && (
            <p className="state-msg">No tasks found. Create your first task!</p>
          )}
          {!loading && !error && tasks.map((task, index) => (
            <TaskCard key={task._id} task={task} index={index + 1} onDelete={handleDelete} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default TaskListPage;
