const initialState = {
  students: [],
  loading: false,
  error: "",
};

const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "GET_STUDENTS":
      return {
        ...state,
        loading: false,
        students: action.payload,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default StudentReducer;
