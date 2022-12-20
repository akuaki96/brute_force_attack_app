import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-contents">
          <h2>授業支援システム</h2>
          <form onSubmit={(e) => alert([id, pass])}>
            <div className="form-wrapper">
              <input
                className="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

              <input
                className="pass"
                type="text"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <button className="login-box" type="submit">
                ログイン
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
