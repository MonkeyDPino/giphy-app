import React, { useState } from "react";

const Context = React.createContext();

export function UserContext({ children }) {
  const [jwt, setJWT] = useState("");

  return (
    <Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
  );
}

export default Context;
