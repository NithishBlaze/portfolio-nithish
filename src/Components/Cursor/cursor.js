import React, { useEffect, useState } from "react";
import "./cursor.css";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", () => setClicked(true));
      document.addEventListener("mouseup", () => setClicked(false));

      const hoverTargets = document.querySelectorAll("a, button");
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addEventListeners();
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", () => setClicked(true));
      document.removeEventListener("mouseup", () => setClicked(false));
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${clicked ? "clicked" : ""} ${hovered ? "hovered" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

export default CustomCursor;
