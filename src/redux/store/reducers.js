import C from "../constants";
import { combineReducers } from "redux";

// error reducer
export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];
    case C.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload);
    default:
      return state;
  }
};

// single course reducer
export const course = (state = null, action) =>
  action.type === C.ADD_COURSE ? action.payload : state;

// single user reducer
export const user = (state = null, action) =>
  action.type === C.ADD_USER ? action.payload : state;

// all courses reducer
export const allCourses = (state = [], action) => {
  switch (action.type) {
    case C.ADD_COURSE:
      const hasCourse = state.some(
        (course) => course.name === action.payload.name
      );

      return hasCourse ? state : [...state, course(null, action)];

    case C.REMOVE_COURSE:
      return state.filter((course) => course.name !== action.name);

    default:
      return state;
  }
};

// all users reducer
export const allUsers = (state = [], action) => {
  switch (action.type) {
    case C.ADD_USER:
      const hasUser = state.some((user) => user.name === action.payload.name);

      return hasUser ? state : [...state, user(null, action)];

    case C.REMOVE_USER:
      return state.filter((user) => user.name !== action.name);

    default:
      return state;
  }
};

export default combineReducers({
  allCourses,
  allUsers,
  errors,
});
