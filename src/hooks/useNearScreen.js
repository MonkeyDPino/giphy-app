import { useState, useEffect, useRef } from "react";
function useNearScreen({ distance = "100px", extRef, once = true } = {}) {
  const [show, setShow] = useState(false);
  const elementRef = useRef();
  const element = extRef ? extRef.current : elementRef.current;

  useEffect(() => {
    let observer
    const onChange = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(function(){
      const observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });
      if (element) observer.observe(element);
    })
    return () => observer && observer.disconnect();
  }, [distance, element, once]);

  return { elementRef: elementRef, show: show };
}

export default useNearScreen;
