import { useLocation } from "wouter";
import { memo } from "react";
import useForm from "hooks/useForm";
import "components/SearchForm.css";
const RATINGS = ["g", "pg", "pg-13", "r"];
function SearchForm({ initialKeyword = "", initialRating = "g" }) {
  const { keyword, rating, update_keyword, update_rating } = useForm({
    initialKeyword: initialKeyword,
    initialRating: initialRating,
  });
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };
  const handleChange = (event) => {
    update_keyword(event.target.value);
  };
  const handleChangeRating = (event) => {
    update_rating(event.target.value);
  };
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
        <select
          onChange={handleChangeRating}
          className="search__select"
          value={rating}
        >
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
