import { useState, useEffect } from "react";
import GetGifs from "services/getGifs";

function useGifs({ keyword,limit = 15 } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const keywordToUse = keyword
      ? keyword
      : localStorage.getItem("LastKeyword");
    setLoading(true);
    GetGifs({ keyword: keywordToUse, limit: limit}).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("LastKeyword", keywordToUse);
    });
  }, [keyword,limit]);

  useEffect(() => {
    if (page === 0) return;
    const keywordToUse = keyword
      ? keyword
      : localStorage.getItem("LastKeyword");
    setLoadingNext(true);
    GetGifs({ keyword: keywordToUse, page: page, limit: limit }).then((gifs) => {
      setGifs((currentGifs) => currentGifs.concat(gifs));
      setLoadingNext(false);
      localStorage.setItem("LastKeyword", keywordToUse);
    });
  }, [page, keyword,limit]);

  return { gifs, loading, setPage ,loadingNext };
}

export default useGifs;
