import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [writingTitle, writingTitleChange] = useState([
    "Html & CSS",
    "VANILA JS",
    "REACT",
    "TYPESCRIPT",
  ]);

  let [detailWindow, detailWindowChange] = useState("");

  return (
    <>
      <div className="nav-bar">React Basic Blog</div>
      <div className="main">
        <div className="guidance"> 💨 Click title for detail :)</div>
        <div className="lists">
          {writingTitle.map((title) => {
            return (
              <div className="list" onClick={() => {}}>
                <span className="list-title"> {title} ✨</span>
                <span className="list-date">2022. 01. 08</span>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="content">
          <span>Details</span>
          <Detail />
        </div>
      </div>
      <footer className="footer">
        <input />
        <button> click ! </button>
      </footer>
    </>
  );

  function Detail() {
    return (
      <div className="detail">
        <span className="detail-title"> </span>
        <span className="detail-info"> </span>
      </div>
    );
  }
}

export default App;
