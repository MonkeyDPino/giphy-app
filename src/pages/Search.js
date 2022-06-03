import ListOfGifs from "../components/ListOfGifs";
import Spinner from "../components/Spinner";
import useGifs from "../hooks/useGifs";

function Search({ params }) {
  const { keyword } = params;
  const {loading,gifs} = useGifs({keyword: keyword});
  
  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
export default Search;
