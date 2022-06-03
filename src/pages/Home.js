import { Link ,useLocation} from "wouter";
import { useState } from "react";
import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../hooks/useGifs";
import Spinner from "../components/Spinner";

const popular_gifs = ["one piece", "naruto", "bleach"];

function Home() {
  const [keyword, setKeyword] = useState("");
  // eslint-disable-next-line
  const [path,pushLocation] = useLocation()
  const {loading,gifs} = useGifs();


  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`)
  }
  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Buscate un gif" type="text" value={keyword} onChange={handleChange} />
      </form>
      <h3 className="home__title">Última Busqueda</h3>
      {loading?<Spinner/>:<ListOfGifs gifs={gifs}/>}
      <h3 className="home__title">Gifs Populares</h3>
      <ul>
        {popular_gifs.map((gif) => (
          <li key={gif}>
            <Link to={`/search/${gif}`}>Gifs de {gif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
