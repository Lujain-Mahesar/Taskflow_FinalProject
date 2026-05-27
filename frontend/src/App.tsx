import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskListPage from "./pages/TaskListPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import type { Task } from "./types/task";

function App() {
  const handleCreateTask = (task: Task) => {
    console.log("Task created:", task);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/create" element={<CreateTaskPage onCreateTask={handleCreateTask} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
