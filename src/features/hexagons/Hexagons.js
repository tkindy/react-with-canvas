import { useAnimation, useCanvas } from "../../canvas/Canvas";

const getHexagonCorners = (x, y, radius, rotationDeg) => {
  const rotationRad = (Math.PI / 180) * rotationDeg;

  return [...Array(6).keys()].map((i) => {
    const cornerRad = i * (Math.PI / 3) + rotationRad;

    return {
      x: x + radius * Math.cos(cornerRad),
      y: y + radius * Math.sin(cornerRad),
    };
  });
};

export const Hexagon = ({ x, y, radius, rotationDeg, color }) => {
  const renderingContext = useCanvas();
  const animatedRotationDeg = useAnimation(rotationDeg, (angle) => angle + 1);

  if (renderingContext !== null) {
    const corners = getHexagonCorners(x, y, radius, animatedRotationDeg);

    renderingContext.beginPath();
    corners.forEach((corner, index) => {
      if (index === 0) {
        renderingContext.moveTo(corner.x, corner.y);
      } else {
        renderingContext.lineTo(corner.x, corner.y);
      }
    });
    renderingContext.fillStyle = color;
    renderingContext.fill();
  }

  return null;
};

export const getRandomHexagons = (canvasWidth, canvasHeight) => {
  return [...Array(10).keys()].map(() => {
    return {
      x: canvasWidth * (2 * Math.random() - 0.5),
      y: canvasHeight * (2 * Math.random() - 0.5),
      radius: Math.random() * canvasWidth,
      rotationDeg: Math.random() * 360,
      color: `hsla(207, 79%, ${Math.random() * 100}%, 0.5)`,
    };
  });
};
