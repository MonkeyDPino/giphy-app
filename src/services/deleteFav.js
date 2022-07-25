const Endpoint = "http://localhost:5000";

export default function deleteFav({ id,jwt }) {
  return fetch(`${Endpoint}/api/user/fav`, {
    method: "DELETE",
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
