import { useLocation } from "wouter";
import { useState, memo } from "react";
import "components/SearchForm.css";

const RATINGS = ["g","pg","pg-13","r"]

function SearchForm() {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState(RATINGS[0])
  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  }

  return (
    <div className="block">
      <form onSubmit={handleSubmit} className="search__form">
        <input
          className="search__input"
          placeholder="Buscate un gif"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
        <select onChange={handleChangeRating} value={rating}>
          <option disabled>Selecciona el rating</option>
          {RATINGS.map(rating => <option key={rating} value={rating}>{rating}</option>)}
        </select>
        <button className="search__button">Buscar</button>
      </form>
    </div>
  );
}

export default memo(SearchForm);
