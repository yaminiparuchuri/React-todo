import { GET_TODO_LIST, ADD_NEW_LIST } from "../actions/types";

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        items: action.payload,
        list: [action.payload, ...state.list]
      };
    case ADD_NEW_LIST:
      return {
        ...state,
        list: [action.payload, ...state.list]
      };
    default:
      return state;
  }
}
