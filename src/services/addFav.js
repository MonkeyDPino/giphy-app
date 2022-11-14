export default function addFav({ id,jwt }) {
  return fetch(`${process.env.REACT_APP_ENDPOINT}/api/user/fav`, {
    method: "POST",
    headers: { "Content-Type": "application/json", jwt: jwt },
    body: JSON.stringify({ id: id})
  })
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Something went wrong in login");
      }
      return response.json();
    })
    .then((response) => {
      return response.favs;
    });
}
