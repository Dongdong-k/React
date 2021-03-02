import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// API 나 다른 곳으로부터 정보를 가져올 때
const content = [
  {
    tab: "Section 1",
    content: "I'm the contecnt of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the contecnt of the Section 2",
  },
];

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // setCurrentIndex(currentIndex);
  // 오류 점검하기 - allTabs 미입력 or Array 형태가 아닌 경우
  if (!allTabs || !Array.isArray(allTabs)) {
    console.log("allTabs 입력 되지 않았습니다 or Array 아닙니다");
    console.log(!allTabs);
    console.log(!Array.isArray(allTabs));
    return;
  } else {
    console.log("오류 없음");
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function App() {
  const { currentItem, changeItem } = useTab(0, content);
  const section1 = () => changeItem(0);
  const section2 = () => changeItem(1);
  // console.log(currentItem.content);
  return (
    <div className="App">
      {content.map((sectionName, index) => (
        <button onClick={() => changeItem(index)}>{sectionName.tab}</button>
      ))}
      <button onClick={section1}>section1</button>
      <button onClick={section2}>section2</button>
      <div>{currentItem.content}</div>
      {/* <button onClick={currentItem.section2}>section2</button> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
