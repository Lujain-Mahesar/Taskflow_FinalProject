import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import TaskCard from "../components/TaskCard";
import PriorityFilter from "../components/PriorityFilter";

function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    setLoading(true);
    const url = priority
      ? `http://localhost:5000/tasks?priority=${priority}`
      : "http://localhost:5000/tasks";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load tasks");
        setLoading(false);
      });
  }, [priority]);

  const handleDelete = (id: string) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter((t) => t._id !== id)));
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
          {loading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && tasks.length === 0 && (
            <p>No tasks found. Create your first task!</p>
          )}
          {!loading && !error && tasks.map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default TaskListPage;
