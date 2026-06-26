import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import StudentList from "./Components/StudentList";
import StudentForm from "./Components/StudentForm";
import StudentDetails from "./Components/StudentDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/students" element={<StudentList />} />

        <Route path="/add" element={<StudentForm />} />

        <Route path="/edit/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
