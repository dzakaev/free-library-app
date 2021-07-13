const initialState = {
  loading: true,
  items: [],
  error: null,
};
export default function books(state = initialState, action) {
  switch (action.type) {
    case "todos/book/pending":
      return {
        ...state,
        loading: true,
      };
    case "todos/book/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "todos/book/rejected":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.error,
      };
    default:
  }
  return state;
}

export const fetchBook = () => {
  return async (dispatch, getState) => {
    const state = getState()

    dispatch({ type: "todos/book/pending" });
    try {
      const response = await fetch("/books", {
        headers: {
          Authorization: `Bearer ${state.application.token}`
        }
      });
      const json = await response.json();
      if (json.error) {
        dispatch({
          type: "todos/book/rejected",
          error: "При запросе на сервер произошла ошибка",
        });
      } else {
        dispatch({ type: "todos/book/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ ype: "todos/book/rejected", error: e.toString() });
    }
  };
};
