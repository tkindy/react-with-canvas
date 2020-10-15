import React from "react";
import { Stage, Layer } from "react-konva";
import "./App.css";
import {
  getRandomRegularPolygons,
  RegularPolygon,
} from "./features/shapes/RegularPolygons";

const App = () => {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  return (
    <Stage width={canvasWidth} height={canvasHeight}>
      <Layer>
        {getRandomRegularPolygons(canvasWidth, canvasHeight).map(
          (polygon, i) => (
            <RegularPolygon key={i} {...polygon} />
          )
        )}
      </Layer>
    </Stage>
  );
};

export default App;
