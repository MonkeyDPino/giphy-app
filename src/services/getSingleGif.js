import { API_KEY } from "./settings";

function getSingleGif(id) {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res;
      return {
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url,
      };
    });
}

export default getSingleGif;
