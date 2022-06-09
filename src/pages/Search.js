import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import "pages/Search.css"

function Search({ params }) {
  const { keyword } = params;
  const { loading, gifs,setPage } = useGifs({ keyword: keyword });

  return (
    <>
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs loading={loading} gifs={gifs} />
      <br />
      <button className="NextPageButton" onClick={() =>setPage(prev=>prev+1)}>Siguiente Pagina</button>
    </>
  );
}
export default Search;
