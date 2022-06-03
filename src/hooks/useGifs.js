import { useState, useEffect } from "react";
import GetGifs from "../services/getGifs";

function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const keywordToUse = keyword
      ? keyword
      : localStorage.getItem("LastKeyword");
    setLoading(true);
    GetGifs({ keyword:keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("LastKeyword", keywordToUse);
    });
  }, [keyword]);

  return { gifs, loading };
}

export default useGifs;
