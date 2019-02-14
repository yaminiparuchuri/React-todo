import axios from "axios";
import { GET_TODO_LIST, ADD_NEW_LIST } from "./types";

export const getTodoList = () => dispatch => {
  axios.get("/todo/todolist").then(res =>
    dispatch({
      type: GET_TODO_LIST,
      payload: res.data
    })
  );
};

export const addTodoListCall = list => dispatch => {
  axios.post("/todo/save/list", list).then(res =>
    dispatch({
      type: ADD_NEW_LIST,
      payload: res.data
    })
  );
};
