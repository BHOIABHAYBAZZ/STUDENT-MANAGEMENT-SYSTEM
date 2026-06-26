import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
      }}
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">
             Student Hub Dashboard
          </h1>
         
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card shadow border-0 p-4 text-center h-100">
              <h2></h2>
              <h4>Add Student</h4>

              <Link to="/add" className="btn btn-success mt-3">
                Add New
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 text-center h-100">
                            <h4>Student Records</h4>

              <Link to="/students" className="btn btn-primary mt-3">
                View Records
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}