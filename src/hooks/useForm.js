import { useReducer } from "react";
const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const USE_ACTIONS = {
  [ACTIONS.UPDATE_RATING]: (state, payload) => {
    return {
      ...state,
      rating: payload,
    };
  },
  [ACTIONS.UPDATE_KEYWORD]: (state, payload) => {
    return {
      ...state,
      keyword: payload,
    };
  },
};
const reducer = (state, action) => {
  const actualAction = USE_ACTIONS[action.type];
  return actualAction ? actualAction(state, action.payload) : state;
};

function useForm({ initialKeyword, initialRating }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  return {
    keyword: state.keyword,
    rating: state.rating,
    update_keyword: (keyword) =>
      dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      }),
    update_rating: (rating) =>
      dispatch({
        type: ACTIONS.UPDATE_RATING,
        payload: rating,
      }),
  };
}

export default useForm;
