import React, { useEffect, useState } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);
    return () => {
      console.log("claening op...");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default WindowTracker;
