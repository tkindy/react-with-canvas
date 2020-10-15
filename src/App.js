import React from "react";
import { Stage, Layer } from "react-konva";
import "./App.css";
import { getRandomHexagons, Hexagon } from "./features/hexagons/Hexagons";

const App = () => {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  return (
    <Stage width={canvasWidth} height={canvasHeight}>
      <Layer>
        {getRandomHexagons(canvasWidth, canvasHeight).map((hexagon, i) => (
          <Hexagon key={i} {...hexagon} />
        ))}
      </Layer>
    </Stage>
  );
};

export default App;
