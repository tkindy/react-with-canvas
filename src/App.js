import React from "react";
import "./App.css";
import { Canvas } from "./canvas/Canvas";
import { getRandomHexagons, Hexagon } from "./features/hexagons/Hexagons";

const App = () => {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  return (
    <Canvas width={canvasWidth} height={canvasHeight}>
      {getRandomHexagons(canvasWidth, canvasHeight).map((hexagon, i) => (
        <Hexagon key={i} {...hexagon} />
      ))}
    </Canvas>
  );
};

export default App;
