import Context from "context/UserContext";
import { useCallback, useContext, useState } from "react";
import logIn from "services/login"

function useUser() {
  const { jwt, setJWT } = useContext(Context);
  const [state, setState] = useState({isErrorLogin: false, isLoading: false})

  const login = useCallback(({email, password}) => {
    setState((prevValues)=> {return {...prevValues,isLoading:true}})
    logIn({email: email, password: password})
    .then((result) => {
      setState((prevValues)=> {return {...prevValues,isLoading:false}})
      setJWT(result)
    })
    .catch(error => { 
      setState({isLoading: false,isErrorLogin:true})
      console.error(error)
    })

  }, [setJWT]);

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    "isErrorLogin":state.isErrorLogin,
    "isLoading": state.isLoading
  };
}

export default useUser;
