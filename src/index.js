import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  // 1. initialValue 값을 넣어주는 useInput 작성
  // 기능 : 초기값 입력시 그 값을 반환 & 입력값 변경시 유효성 검증하는 function 기능
  const useInput = (initialValue, validator) => {
    // 1. 초기값 입력 기능
    const [value, setValue] = useState(initialValue); 
    // 2. function 설정
    //  value 에 event.target.value 값 할당해주고
    //  그 value 값을 콜백 함수를 이용해 업데이트 해주는 것
    const onChange = (event) => {
      const {target : {value}} = event;
      // validator : 유효성 검증 기능 추가
      // function 입력 여부 체크
      let willUpdate = true;
      if (typeof validator === "function"){
        // 입력된 function 결과값 입력 - true or false
        // useState 와 동일하게 콜백함수로 생각하면 됨
        willUpdate = validator(value)
      }
      if (willUpdate){
        setValue(value)
      }
    }
    return {value, onChange}
  }
  // 초기값, 유효성 검증 함수 입력
  const maxLen = (value) => value.length <= 10; 
  const name = useInput("Mr.Kim", maxLen);
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input placeholder="Type your name" {...name}></input>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
