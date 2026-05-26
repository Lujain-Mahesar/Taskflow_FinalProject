import CreateTaskPage from './pages/CreateTaskPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/create" element={<CreateTaskPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
