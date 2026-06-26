import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStudent } from "../Redux/Actions/StudentAction";

export default function StudentDetails() {
  const { id } = useParams();

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

  useEffect(() => {
    axios
      .get(`http://localhost:3001/students/${id}`)
      .then((res) => setStudent(res.data));
  }, [id]);

  const changeHandler = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateStudent(student));

    navigate("/students");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Edit Student</h3>

        <form onSubmit={submitHandler}>
          <input
            className="form-control mb-3"
            name="name"
            value={student.name}
            onChange={changeHandler}
          />

          <input
            className="form-control mb-3"
            name="roll"
            value={student.roll}
            onChange={changeHandler}
          />

          <input
            className="form-control mb-3"
            name="phone"
            value={student.phone}
            onChange={changeHandler}
          />

          <input
            className="form-control mb-3"
            name="email"
            value={student.email}
            onChange={changeHandler}
          />

          <input
            className="form-control mb-3"
            name="age"
            value={student.age}
            onChange={changeHandler}
          />

          <input
            className="form-control mb-3"
            name="class"
            value={student.class}
            onChange={changeHandler}
          />

          <input
            className="form-control mb-3"
            name="city"
            value={student.city}
            onChange={changeHandler}
          />

          <input
            className="form-control mb-3"
            name="image"
            value={student.image}
            onChange={changeHandler}
          />

          <button className="btn btn-primary w-100">Update Student</button>
        </form>
      </div>
    </div>
  );
}
