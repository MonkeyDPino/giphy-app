import {API_KEY} from "./settings"

export default function GetGifs({keyword ="NotFound", page=0, limit=5, rating} = {}) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit*page}&rating=${rating}&lang=en`

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res;
      const getGifs = data.map((image) => {
          return{
              id:image.id,
              title:image.title,
              url:image.images.downsized_medium.url
          }
      });
      return getGifs
    });
}
