import { useLocation } from "wouter";
import { useState, memo } from "react";
import "components/SearchForm.css"

function SearchForm() {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search__input"
        placeholder="Buscate un gif"
        type="text"
        value={keyword}
        onChange={handleChange}
      />
      <button className="search__button">Buscar </button>
    </form>
  );
}

export default memo(SearchForm);
