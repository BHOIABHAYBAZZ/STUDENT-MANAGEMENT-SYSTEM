import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent } from "../Redux/Actions/StudentAction";
import { Link } from "react-router-dom";

export default function StudentList() {
  const dispatch = useDispatch();

  const { students, loading } = useSelector((state) => state);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  let data = [...students];

 
  data = data.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

 
  if (filter !== "") {
    data = data.filter((student) => student.class === filter);
  }


  if (sort === "name") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "roll") {
    data.sort((a, b) => a.roll - b.roll);
  }

  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      }}
    >
      <div className="container">
       
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-primary"> Student Records</h2>
        </div>

      
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search Student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="roll">Roll Number</option>
            </select>
          </div>

          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All Classes</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BCom">BCom</option>
              <option value="MCA">MCA</option>
            </select>
          </div>
        </div>

        
        {loading && <h4 className="text-center">Loading...</h4>}

        <div className="table-responsive shadow rounded">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Age</th>
                <th>Class</th>
                <th>Grade</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.roll}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>

                    <td>
                      <span className="badge bg-primary">{student.class}</span>
                    </td>

                    <td>
                      <span className="badge bg-success">{student.grade}</span>
                    </td>

                    <td>
                      <Link
                        to={`/edit/${student.id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deleteStudent(student.id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center text-muted">
                    No Students Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
