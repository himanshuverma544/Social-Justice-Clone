'use client';

import { useState, useEffect } from "react";

import { debounce } from "@/functions/utilities/performance";

const defaultBreakpoints = {
  xxl: 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  xs: 425,
  xxs: 375
};


const useWindowSize = (customBreakpoints = {}, delay = 200) => {

  const [screenWidth, setScreenWidth] = useState(0);
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };


  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth);
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);


  return ({ 
    breakpoints,
    screenWidth
  });
}


export default useWindowSize;