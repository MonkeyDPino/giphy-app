import getSingleGif from "services/getSingleGif";
import { useState, useEffect } from "react";

function useSingleGif(id) {
  const [values, setValues] = useState({
    loading: false,
    error: false
  })

  useEffect(() => {
    setValues(prevValues => {return {...prevValues,loading: true}})
    getSingleGif(id).then((res) => {
      setValues({
        gif: res,
        loading: false,
        error: false
      })
    }).catch(error => {
      setValues({
        gif: null,
        loading: false,
        error: true
      })
    });
  },[id])

  return { ...values };
}

export default useSingleGif;
