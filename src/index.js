import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 기능 : 저장하거나 삭제 등 기능을 실행할 때 다시 한번 확인하고 입력 결과값에 따라 기능 수행
const useConfirm = (message = " ", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    // confirm : 메세지를 띄우는 창으로 사용시 window.confirm 으로 입력 필요
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  // yes_function 정의
  const deleteWorldFunction = () => console.log("Deleted the World");
  // no_function 정의
  const deleteWorldRejection = () => console.log("Rejected");
  // useConfirm(초기값, yes_func, no_func) 기능 할당 및 button onclick 연결하기
  const deleteWorldAction = useConfirm(
    "Are you sure?",
    deleteWorldFunction,
    deleteWorldRejection
  );
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={deleteWorldAction}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
