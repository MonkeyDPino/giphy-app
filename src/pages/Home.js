import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import Category from "components/Category";
import TrendingSearchesLazy from "components/TrendingSearchesLazy";
import "./Home.css";
import SearchForm from "components/SearchForm";
import Title from "components/Title";

const popular_gifs = ["one piece", "naruto", "dragon ball"];

function Home() {
  const { loading, gifs } = useGifs({ limit: 10 });

  return (
    <>
    <Title title="Home | Giphy"/>
      <SearchForm />
      <div className="home__container">
        <div className="home__Search">
          <h3 className="home__title">Última Busqueda</h3>
          <ListOfGifs loading={loading} gifs={gifs} />
        </div>
        <div className="home__trends">
          <Category name="Gifs Populares" keywords={popular_gifs} />
          <TrendingSearchesLazy />
        </div>
      </div>
    </>
  );
}

export default Home;
