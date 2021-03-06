import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useFadeIn = (duration = 1, color = "blue") => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      console.log(typeof element.current);
      const { current } = element;
      current.style.transition = `opacity ${duration}s, color ${duration}s`;
      current.style.color = color;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handler = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);

    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, []);
  return status;
};

const App = () => {
  const handleonLine = (online) => {
    console.log(online ? "we are Online" : "we are offline");
  };
  const onLine = useNetwork(handleonLine);
  const fadeInh1 = useFadeIn(5, "red");
  const fadeInp = useFadeIn(1);
  return (
    <div className="App">
      <h1 {...fadeInh1}>Hi</h1>
      <p {...fadeInp}>hihihihihihihihi</p>
      <h1>{onLine ? "OnLine" : "OffLine"}</h1>
      <h1>{onLine ? "True" : "False"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
