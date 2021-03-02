import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// reference 사용하여 선택하고 싶은 요소 연결
// 연결한 요소를 useEffect로 연결하여 실행하고 싶은 함수 매칭
const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    element.current.addEventListener("click", onClick);
  }, []);
  return element;
};

function App() {
  const sayhello = () => console.log("hello");
  const title = useClick(sayhello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
