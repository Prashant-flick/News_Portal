import { useEffect, useState } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;