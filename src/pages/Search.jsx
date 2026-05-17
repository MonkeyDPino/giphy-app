import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import { useCallback, useRef, useEffect } from "react";
import "pages/Search.css";
import throttle from "just-throttle";
import Title from "components/Title";
import SearchForm from "components/SearchForm";

function Search({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage, loadingNext } = useGifs({ keyword, rating });
  const extRef = useRef();
  const { show } = useNearScreen({
    distance: "20px",
    extRef: loading ? null : extRef,
    once: false,
  });

  // eslint-disable-next-line
  const debounceNextPage = useCallback(
    throttle(() => { setPage((p) => p + 1); }, 500, true),
    []
  );

  useEffect(() => {
    if (show) debounceNextPage();
  }, [show, debounceNextPage]);

  return (
    <>
      <Title title={`${decodeURI(keyword)} | Giphy`} />
      <div className="page-container">
        <div className="search__hero">
          <SearchForm initialKeyword={keyword} initialRating={rating} />
          <h3 className="search__results-title">{decodeURI(keyword)}</h3>
        </div>
        <ListOfGifs loading={loading} gifs={gifs} loadingNext={loadingNext} />
        <div className="sapo" ref={extRef} />
      </div>
    </>
  );
}

export default Search;
