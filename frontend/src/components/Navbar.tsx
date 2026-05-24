import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sub-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Tasks
      </NavLink>
      <NavLink to="/create" className={({ isActive }) => isActive ? "active" : ""}>
        New Task
      </NavLink>
    </nav>
  );
}

export default Navbar;
