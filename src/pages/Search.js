import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

function Search({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword: keyword });

  return (
    <>
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs loading={loading} gifs={gifs} />
    </>
  );
}
export default Search;
