import Context from "context/UserContext";
import { useCallback, useContext, useState } from "react";
import logIn from "services/login";
import addFav from "services/addFav";
import deleteFav from "services/deleteFav";

function useUser() {
  const { jwt, setJWT, setFavs, favs } = useContext(Context);
  const [state, setState] = useState({ isErrorLogin: false, isLoading: false });

  const login = useCallback(
    ({ email, password }) => {
      setState((prevValues) => {
        return { ...prevValues, isLoading: true };
      });
      logIn({ email: email, password: password })
        .then((result) => {
          setState((prevValues) => {
            return { ...prevValues, isLoading: false };
          });
          window.sessionStorage.setItem("jwt", result);
          setJWT(result);
        })
        .catch((error) => {
          setState({ isLoading: false, isErrorLogin: true });
          window.sessionStorage.removeItem("jwt");
          console.error(error);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJWT(null);
  }, [setJWT]);

  const addFavs = useCallback(
    (id) => {
      addFav({ id: id, jwt: jwt })
        .then(setFavs)
        .catch((error) => {
          console.error(error);
        });
    },
    [setFavs, jwt]
  );

  const deleteFavs = useCallback(
    (id) => {
      deleteFav({ id: id, jwt: jwt })
        .then(setFavs)
        .catch((error) => {
          console.error(error);
        });
    },
    [setFavs, jwt]
  );

  const isFaved = useCallback(
    (id) => {
      return favs.some((gif) => gif.id === id);
    },
    [favs]
  );

  return {
    isLogged: Boolean(jwt),
    addFavs,
    deleteFavs,
    login,
    logout,
    isFaved,
    isErrorLogin: state.isErrorLogin,
    isLoading: state.isLoading,
  };
}

export default useUser;
