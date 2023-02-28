import React from "react";
import "./styles.css";

export default function App() {
  function handleClickFunction(e) {
    const body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  }

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <>
      <div className="Container">
        <h1>Random background color changer</h1>
        <button className="btn1" onClick={handleClickFunction}>
          Click me
        </button>
      </div>
    </>
  );
}
