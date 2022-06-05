import {API_KEY} from "./settings"

export default function GetGifs({keyword ="NotFound"} = {}) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

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
