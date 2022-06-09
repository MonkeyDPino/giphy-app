import { useState, useEffect } from "react";
import GetGifs from "services/getGifs";

function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const keywordToUse = keyword
      ? keyword
      : localStorage.getItem("LastKeyword");
    setLoading(true);
    GetGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("LastKeyword", keywordToUse);
    });
  }, [keyword]);

  useEffect(() => {
    if (page === 0) return;
    const keywordToUse = keyword
      ? keyword
      : localStorage.getItem("LastKeyword");
    setLoadingNext(true);
    GetGifs({ keyword: keywordToUse, page: page }).then((gifs) => {
      setGifs((currentGifs) => currentGifs.concat(gifs));
      setLoadingNext(false);
      localStorage.setItem("LastKeyword", keywordToUse);
    });
  }, [page, keyword]);

  return { gifs, loading, setPage ,loadingNext };
}

export default useGifs;
