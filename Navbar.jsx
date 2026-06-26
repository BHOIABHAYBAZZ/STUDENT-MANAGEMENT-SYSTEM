import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("isLogin");
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{
  background: "linear-gradient(125deg, #eff6ff, #dbeafe)",
}}
    >
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/home">
        
        <span> <span style={{color:"blueviolet"}}>GJ 31</span><img src="https://png.pngtree.com/png-vector/20260523/ourmid/pngtree-blue-cheetah-college-football-logo-racing-aggressively-vector-png-image_19387030.webp" width={70} alt="" /></span>
        </Link>

        <ul className="navbar-nav ms-auto d-flex flex-row align-items-center">
  <li className="nav-item">
    <Link className="nav-link text-primary fw-semibold" to="/home">
      Dashboard
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link text-primary fw-semibold" to="/students">
      Students
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link text-primary fw-semibold" to="/add">
      Add Student
    </Link>
  </li>

  <li className="nav-item ms-3">
    <button className="btn btn-dark px-4" onClick={logout}>
      Logout
    </button>
  </li>
</ul>
      </div>
    </nav>
  );
}
