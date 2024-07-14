import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function Background() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const containerSize = 200;
  const divSize = 20;
  const halfContainerSize = containerSize / 2;
  const radius = containerSize / 2; 
  const [divs, setDivs] = useState([]);

  useEffect(() => {
    const newDivs = [];
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        // Calculate distance from center
        const centerX = x * divSize + divSize / 2;
        const centerY = y * divSize + divSize / 2;

        // Calculate distance from the center of the circle
        const distance = Math.sqrt((centerX - radius) ** 2 + (centerY - radius) ** 2);

        // Calculate maxDistance as the radius of the circle
        const maxDistance = radius;

        // Calculate elevation based on distance
        const elevation = 1 - (distance / maxDistance);

        // Create div object with styles
        const newDiv = {
          key: `${x},${y}`,
          style: {
            backgroundColor: `rgba(4, 8, 112, ${elevation})`,
            boxShadow: `0 0 ${elevation * 10}px rgba(0, 0, 0, 0.5)`,
          },
        };
        newDivs.push(newDiv);
      }
    }
    setDivs(newDivs);
  }, []);

  return (
    <div className="background-section">
      <div
        className="cursor"
        style={{ left: `${position.x - 100}px`, top: `${position.y - 100}px` }}
      >
        {divs.map((div, index) => (
          <div id={div.key} key={div.key} className="small-div" style={div.style}></div>
        ))}
      </div>
    </div>
  );
}
