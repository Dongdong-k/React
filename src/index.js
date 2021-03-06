import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 기능 : 홈페이지 종료시 종료할 것인지 묻는 경고창 활성화
const usePreventLeave = () => {
  // event 발생시 실행 기능 : beforeunload 기능 사용시 아래 내용 작성 필요
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  // function 작성하여 eventlistener 로 연결하고 추후 function 기능을 반환
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  // usePreventLeave 에서 반환된 함수의 기능을 할당 받고 버튼에 연결
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
