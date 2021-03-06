import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 기능 : 마우스의 위치에 따라서 원하는 function 기능 수행
// 여기서는 창 상단 위로 마우스가 이탈시 console.log 실행
const useBeforeLeave = (onBefore) => {
  // 이탈시 원하는 동작 정의 : 창 상단으로 이탈시 console.log
  const leaveAction = (event) => {
    console.log(event);
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  // useEffect 기능 사용하여 해당 이벤트 발생시 내용 업데이트
  useEffect(() => {
    document.addEventListener("mouseleave", leaveAction);
    return () => document.removeEventListener("mouseleave", leaveAction);
  }, []);
};

const App = () => {
  // 이벤트 발생시 실행하기 원하는 기능 함수로 정의
  const begforyou = () => console.log("Do you really want to leave?");
  // useBeforeLeave 에 함수 할당 및 기능 활성화
  useBeforeLeave(begforyou);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
