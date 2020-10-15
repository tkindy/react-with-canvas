import { useEffect, useRef, useState } from "react";

export const useAnimation = (initialValue, valueUpdater) => {
  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setFrameCount(frameCount + 1);
    });
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [frameCount, setFrameCount]);

  const animatedValue = useRef(initialValue);
  animatedValue.current = valueUpdater(animatedValue.current);
  return animatedValue.current;
};
