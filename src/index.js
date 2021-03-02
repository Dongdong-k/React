import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [number, setNumber] = useState(0);
  const [anumber, setaNumber] = useState(0);
  const sayhello = () => console.log("number가 변경 되었습니다");
  // useEffect : componentWillUpdate, DidMount 등과 동일한 기능 수행
  // [] 안에 있는 내용이 변경될 때, function-sayhello 기능 수행
  useEffect(sayhello, [number]);

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(anumber + 1)}>{anumber}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
