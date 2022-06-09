import { useState, useEffect, useRef } from "react";
function useNearScreen({ distance = "100px" } = {}) {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  const onChange = (entries, observer) => {
    if (entries[0].isIntersecting) {
      setShow(true);
      observer.disconnect();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [distance]);

  return { elementRef: elementRef, show: show };
}

export default useNearScreen;
