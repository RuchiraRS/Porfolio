import React, { useEffect } from "react";

export const StarBackground = () => {
  useEffect(() => {
    const starContainer = document.getElementById("star-container");
    const numStars = 80;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div
      id="star-container"
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
    ></div>
  );
};
