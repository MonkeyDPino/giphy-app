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
  const [, pushLocation] = useLocation();
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
    <>
      <form onSubmit={handleSubmit} className="search__form">
        <input
          className="search__input appearance"
          placeholder="Buscate un gif"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
        <div className="search__selectCont">
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
          <span className="focus"></span>
        </div>
        <button className="search__button appearance">Buscar</button>
      </form>
    </>
  );
}

export default memo(SearchForm);
