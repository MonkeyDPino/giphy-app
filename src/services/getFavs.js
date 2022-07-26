const Endpoint = "https://giphy-back.herokuapp.com";

export default function getFavs({ jwt }) {
  return fetch(`${Endpoint}/api/user/fav`, {
    method: "GET",
    headers: { "Content-Type": "application/json", jwt: jwt },
  })
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Something went wrong in login");
      }
      return response.json();
    })
    .then((response) => {
      return response;
    });
}
