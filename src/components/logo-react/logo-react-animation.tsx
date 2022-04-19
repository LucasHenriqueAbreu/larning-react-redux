import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import reactLogoAnimation from "../../assets/animations/react-logo-animations.json";
// TODO: criar evento de hover e reanimar
const ReactLogo = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current!,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: reactLogoAnimation,
    });
    return () => lottie.stop();
  }, []);
  
  return <div style={{ height: 150, width: 150 }} ref={anime}></div>;
};

export default ReactLogo;