const initialState = {
  loading: true,
  items: [],
};
export default function users(state = initialState, action) {
  switch (action.type) {
    case "todos/users/pending":
      return {
        ...state,
        loading: true,
      };
    case "todos/users/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "todos/users/rejected":
      return {
        ...state,
        loading: false,
        items: [],
      };
    default:
  }
  return state;
}

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "todos/users/pending" });
    try {
      const response = await fetch("/users", {});
      const json = await response.json();
      console.log(json)

      dispatch({ type: "todos/users/fulfilled", payload: json });
    }catch (e) {
      return  dispatch({ type: "todos/users/rejected", });
    }
  };
};
