import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskListPage from "./pages/TaskListPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import type { Task } from "./types/task";

function App() {
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleCreateTask = (task: Task) => {
    console.log("Task saved:", task);
    setEditingTask(null);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskListPage onEdit={handleEditTask} />} />
        <Route path="/create" element={<CreateTaskPage onCreateTask={handleCreateTask} editingTask={editingTask} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
