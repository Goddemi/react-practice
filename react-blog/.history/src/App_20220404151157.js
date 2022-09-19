import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="nav-bar">React Basic Blog</div>
      <div className="main">
        <div className="lists">
          <div className="list">
            <div className="list-title"> HTML & CSS</div>
            <div className="list-date">2022. 01. 08</div>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
