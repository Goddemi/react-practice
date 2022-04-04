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

  let [detailWindow, detailWindowChange] = useState(false);

  return (
    <>
      <div className="nav-bar">React Basic Blog</div>
      <div className="main">
        <div className="guidance"> 💨 Click title for detail :)</div>
        <div className="lists">
          {writingTitle.map((title) => {
            return (
              <div
                className="list"
                onClick={() => {
                  detailWindowChange(true);
                }}
              >
                <span className="list-title"> {title} ✨</span>
                <span className="list-date">2022. 01. 08</span>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="content">
          <span>Details</span>
          {detailWindow === true ? <Detail /> : null}
        </div>
      </div>
      <footer className="footer">
        <input />
        <button> click ! </button>
      </footer>
    </>
  );
}

function Detail() {
  return (
    <div className="detail">
      <span className="detail-title">aaa </span>
      <span className="detail-info">bbb</span>
    </div>
  );
}

export default App;
