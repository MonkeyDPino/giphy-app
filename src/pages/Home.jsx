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
      <Title title="Home | Giphy" />
      <div className="page-container">
        <div className="home__search-hero">
          <h1>Find the perfect GIF</h1>
          <SearchForm />
        </div>
        <div className="home__container">
          <div className="home__Search">
            <p className="home__title">Trending</p>
            <ListOfGifs loading={loading} gifs={gifs} />
          </div>
          <aside className="home__trends">
            <Category name="Popular" keywords={popular_gifs} />
            <TrendingSearchesLazy />
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;
