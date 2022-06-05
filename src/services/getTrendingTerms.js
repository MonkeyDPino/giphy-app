import { API_KEY } from "./settings";

export default function GetTrendingTerms() {
  const url = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res.data?res.data:[]
    });
}
