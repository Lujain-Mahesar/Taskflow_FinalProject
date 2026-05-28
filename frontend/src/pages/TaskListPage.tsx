import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import TaskCard from "../components/TaskCard";
import PriorityFilter from "../components/PriorityFilter";
import { fetchTasks, deleteTask } from "../services/taskService";

type Props = {
  onEdit: (task: Task) => void;
};

function TaskListPage({ onEdit }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchTasks(priority)
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load tasks. Make sure the server is running.");
        setLoading(false);
      });
  }, [priority]);

  const handleDelete = (id: string) => {
    deleteTask(id)
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
            <TaskCard key={task._id} task={task} index={index + 1} onDelete={handleDelete} onEdit={onEdit} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default TaskListPage;
