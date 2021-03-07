import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 버튼을 누르면 전체화면 활성화
// 전체화면을 시킬 이미지 useRef로 연결
// useRef 내부에 선택된 이미지를 전체화면으로 만드는 함수 설정
// 버튼 - onclick 와 활성화 시키는 함수와 연결

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      callback(true);
    }
  };
  const triggerCloseFullscreen = () => {
    callback(false);
    document.exitFullscreen();
  };

  return { element, triggerFullscreen, triggerCloseFullscreen };
};

// 전체화면 끄기 버튼을 보기 위해 그림을 전체화면 시키지 않고 div를 연결하여 전체화면 시켜줌
const App = () => {
  const checkFullscreen = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFullscreen, triggerCloseFullscreen } = useFullscreen(
    checkFullscreen
  );
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://images.freecreatives.com/wp-content/uploads/2015/10/moon-landscape-dream-wallpapers.jpg"
          width="50%"
          alt="Moon"
        />
        <button onClick={triggerCloseFullscreen}>CloseFullscreen</button>
      </div>
      <button onClick={triggerFullscreen}>Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
