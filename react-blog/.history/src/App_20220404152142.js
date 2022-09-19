import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="nav-bar">React Basic Blog</div>
      <div className="main">
        <div className="lists">
          <div className="list">
            <span className="list-title"> HTML & CSS</span>
            <span className="list-date">2022. 01. 08</span>
          </div>
        </div>
        <div className="content">details</div>
      </div>
      <footer className="footer">
        <input />
      </footer>
    </>
  );
}

export default App;
