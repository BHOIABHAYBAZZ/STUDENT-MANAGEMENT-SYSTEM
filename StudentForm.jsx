import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../Redux/Actions/StudentAction";
import { useNavigate } from "react-router-dom";

export default function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    roll: "",
    phone: "",
    email: "",
    age: "",
    class: "",
    city: "",
  });

  const changeHandler = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !student.name ||
      !student.roll ||
      !student.phone ||
      !student.email ||
      !student.age ||
      !student.class ||
      !student.city
    ) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addStudent(student));
    navigate("/students");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        background: "#f4f7fc",
      }}
    >
      <div
        className="card border-0 shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Add Student</h2>
          <p className="text-muted">Enter student information</p>
        </div>

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Student Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={student.name}
              onChange={changeHandler}
              placeholder="Enter Name"
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Roll No</label>
              <input
                type="text"
                className="form-control"
                name="roll"
                value={student.roll}
                onChange={changeHandler}
                placeholder="Roll Number"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={student.age}
                onChange={changeHandler}
                placeholder="Age"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={student.phone}
              onChange={changeHandler}
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={student.email}
              onChange={changeHandler}
              placeholder="Email Address"
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Class</label>
              <input
                type="text"
                className="form-control"
                name="class"
                value={student.class}
                onChange={changeHandler}
                placeholder="Class"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={student.city}
                onChange={changeHandler}
                placeholder="City"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold"
            style={{ borderRadius: "10px" }}
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
