import { useLocation } from "wouter";
import { useState} from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import Category from "components/Category";
import TrendingSearchesLazy from "components/TrendingSearchesLazy"
import "./Home.css"

const popular_gifs = ["one piece", "naruto", "bleach"];

function Home() {
  const [keyword, setKeyword] = useState("");
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        className="search__input"
          placeholder="Buscate un gif"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <div className="home__container">
        <div className="home__Search">
          <h3 className="home__title">Última Busqueda</h3>
          <ListOfGifs loading={loading} gifs={gifs} />
        </div>
        <div className="home__trends">
          <Category
          name="Gifs Populares"
          keywords={popular_gifs}
          />
          <TrendingSearchesLazy/>
        </div>
      </div>
    </>
  );
}

export default Home;
