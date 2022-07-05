import Context from "context/UserContext";
import { useCallback, useContext } from "react";

function useUser() {
  const { jwt, setJWT } = useContext(Context);
  const login = useCallback(() => {
    setJWT("test");
  }, [setJWT]);
  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  };
}

export default useUser;
