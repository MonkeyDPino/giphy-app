export default function GetTrendingTerms() {
  const url = `https://api.giphy.com/v1/trending/searches?api_key=${process.env.REACT_APP_API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res.data?res.data:[]
    });
}
