import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    console.log("x : ", window.scrollX, "y : ", window.scrollY);
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.addEventListener("scroll", onScroll);
    };
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
