import { useState, useEffect } from "react";
import Category from "./Category";
import GetTrendingTerms from "services/getTrendingTerms";

function TrendingSearches() {
  const [terms, SetTerms] = useState([]);

  useEffect(() => {
    GetTrendingTerms().then((result) => SetTerms(result));
  }, []);

  return <Category name="Giphy Trends" keywords={terms} />;
}
export default TrendingSearches;
