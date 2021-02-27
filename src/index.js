import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  // 1. initialValue 값을 넣어주는 useInput 작성
  // 기능 : 초기값 입력시 그 값을 반환 & 입력값 변경시 console.log function 기능
  const useInput = initialValue => {
    // 1. 초기값 입력 기능
    const [value, setValue] = useState(initialValue); 
    // 2. function 설정
    const onChange = (event) => {
      console.log(event.target);
      // console.log(event)
    }
    return {value, onChange}
  }
  // 초기값 입력
  const name = useInput("Mr.Kim");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input placeholder="Type your name" {...name}></input>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
