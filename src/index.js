import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  // [state, setState] = useState
  //  state = 변수, setState = 콜백함수로 state를 가지고 있는 함수
  const [state, setState] = useState(1)
  const incrementItem = () => setState(state +1 )
  const decrementItem = () => setState(state -1 )
  const doubleItem = () => setState(state*2 )

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start coding</h2>
      <h2>Current State : {state}</h2>
      <button onClick={incrementItem}>Increase</button>
      <button onClick={decrementItem}>Decrease</button>
      <button onClick={doubleItem}>Double Times</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
