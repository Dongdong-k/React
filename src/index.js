import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const focusInput = useRef();
  setTimeout(() => {
    console.log(focusInput);
    console.log(focusInput.current);
    focusInput.current.focus();
  }, 2000);

  return (
    <div className="App">
      <h1>Hi</h1>
      <input ref={focusInput} placeholder="hi" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
