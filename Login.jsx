import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLogin", "true");
      navigate("/home");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow mx-auto"
        style={{ width: "350px" }}
      >
        <h2 className="text-center mb-3">Login</h2>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;