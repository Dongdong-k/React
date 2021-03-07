import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// notification API 사용하여 알람 띄우기 기능 만들기
// 버튼을 만들고 알람 기능 활성화시키기
// 현재 알림 허가여부 확인하고 허가시 알람 띄우기
// window에 notification 기능이 없으면 종료

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const checkNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(() => {
        if (Notification.permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return checkNotification;
};

const App = () => {
  const checkNotification = useNotification("Do you like coffee?", {
    body: "I love coke",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={checkNotification}>Notification</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
