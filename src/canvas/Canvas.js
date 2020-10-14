import React, {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";

const CanvasContext = createContext(null);
const FrameContext = createContext(0);

export const useCanvas = () => {
  useContext(FrameContext);
  const renderingContext = useContext(CanvasContext);
  return renderingContext;
};

export const useAnimation = (initialValue, valueUpdater) => {
  const animatedValue = useRef(initialValue);
  animatedValue.current = valueUpdater(animatedValue.current);
  return animatedValue.current;
};

export const Canvas = ({ width, height, children }) => {
  const canvasRef = useRef(null);
  const [renderingContext, setRenderingContext] = useState(null);

  useEffect(() => {
    const context2d = canvasRef.current.getContext("2d");
    setRenderingContext(context2d);
  }, []);

  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setFrameCount(frameCount + 1);
    });
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [frameCount, setFrameCount]);

  if (renderingContext !== null) {
    renderingContext.clearRect(0, 0, width, height);
    renderingContext.strokeStyle = "green";
    const inset = 1;
    renderingContext.strokeRect(
      inset,
      inset,
      width - 2 * inset,
      height - 2 * inset
    );
  }

  return (
    <CanvasContext.Provider value={renderingContext}>
      <FrameContext.Provider value={frameCount}>
        <canvas id="canvas" ref={canvasRef} width={width} height={height} />
        {children}
      </FrameContext.Provider>
    </CanvasContext.Provider>
  );
};
