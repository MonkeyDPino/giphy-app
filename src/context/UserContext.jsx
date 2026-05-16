import React, { useState, useEffect } from "react";
import getFavs from "services/getFavs";
const Context = React.createContext();

export function UserContext({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (!jwt) return setFavs([]);
    getFavs({ jwt })
      .then(setFavs)
      .catch((e) => console.error(e));
  }, [jwt]);

  return (
    <Context.Provider value={{ jwt, favs, setJWT, setFavs }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
