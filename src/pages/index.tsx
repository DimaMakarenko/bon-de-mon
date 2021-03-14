import React from "react";
// components
import Header from "../components/Header";
// import "./script";
import { gsap } from "gsap";

const App: React.FC = () => {
  const $bigBall = document.querySelector(".cursor__ball--big");
  const $hoverables = document.querySelectorAll(".hoverable");

  // Listeners
  document.body.addEventListener("mousemove", onMouseMove);
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener("mouseenter", onMouseHover);
    $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e: any) {
    gsap.to($bigBall, 0.4, {
      x: e.pageX - 15,
      y: e.pageY - 15,
    });
  }

  // Hover an element
  function onMouseHover() {
    gsap.to($bigBall, 0.3, {
      scale: 4,
    });
  }
  function onMouseHoverOut() {
    TweenMax.to($bigBall, 0.3, {
      scale: 1,
    });
  }

  return (
    <>
      <Header />
    </>
  );
};

export default App;
