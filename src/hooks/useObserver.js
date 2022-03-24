import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;

    if (observer.current) observer.current.disconnect();

    let cb = function (entries, observer) { // this will work when lastElement will be visible on screen
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    }

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading])
}