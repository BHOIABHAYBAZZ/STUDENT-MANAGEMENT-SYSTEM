import axios from "axios";

const URL = "http://localhost:3001/students";

export const fetchStudents = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });

    try {
      const res = await axios.get(URL);

      dispatch({
        type: "GET_STUDENTS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.message,
      });
    }
  };
};

export const addStudent = (student) => {
  return async (dispatch) => {
    await axios.post(URL, student);

    dispatch(fetchStudents());
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    await axios.delete(`${URL}/${id}`);

    dispatch(fetchStudents());
  };
};

export const updateStudent = (student) => {
  return async (dispatch) => {
    await axios.put(`${URL}/${student.id}`, student);

    dispatch(fetchStudents());
  };
};
