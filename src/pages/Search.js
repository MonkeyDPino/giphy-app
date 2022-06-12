import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import { useCallback, useRef, useEffect } from "react";
import "pages/Search.css";
import throttle from "just-throttle";
import Title from "components/Title";

function Search({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage,loadingNext } = useGifs({ keyword: keyword });
  const extRef = useRef();
  const { show } = useNearScreen({
    distance: "20px",
    extRef: loading ? null : extRef,
    once: false,
  });
  // eslint-disable-next-line
  const debounceNextPage = useCallback(
    throttle(
      () => {
        setPage((prevPage) => prevPage + 1);
      },
      500,
      true
    ),
    []
  );

  useEffect(() => {
    if (show) {
      debounceNextPage();
    }
  }, [show, debounceNextPage]);

  return (
    <>
      <Title title={`${decodeURI(keyword)} | Giphy`}/>
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs loading={loading} gifs={gifs} loadingNext={loadingNext} />
      <div className="sapo" ref={extRef}></div>
    </>
  );
}
export default Search;
