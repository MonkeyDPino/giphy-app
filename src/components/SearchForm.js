import { useLocation } from "wouter";
import { memo, useReducer } from "react";
import "components/SearchForm.css";

const RATINGS = ["g", "pg", "pg-13", "r"];
const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
};

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${state.keyword}/${state.rating}`);
  };
  const handleChange = (event) => {
    dispatch({
      type: ACTIONS.UPDATE_KEYWORD,
      payload: event.target.value,
    });
  };
  const handleChangeRating = (event) => {
    dispatch({
      type: ACTIONS.UPDATE_RATING,
      payload: event.target.value,
    });
  };

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  return (
    <div className="block">
      <form onSubmit={handleSubmit} className="search__form">
        <input
          className="search__input"
          placeholder="Buscate un gif"
          type="text"
          value={state.keyword}
          onChange={handleChange}
        />
        <select onChange={handleChangeRating} value={state.rating}>
          <option disabled>Selecciona el rating</option>
          {RATINGS.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
        <button className="search__button">Buscar</button>
      </form>
    </div>
  );
}

export default memo(SearchForm);
