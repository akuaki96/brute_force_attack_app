import { useState } from "react";
import "./App.css";

export const App = () => {
  console.log("さいしょ");

  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const [userList, setUserList] = useState([]);

  const onChangeIdText = (event) => setUserId(event.target.value);
  const onChangePassText = (event) => setPass(event.target.value);

  const onClickLogin = () => {
    const user = { id: userId, password: pass };
    const newUserList = [...userList, user];
    setUserList(newUserList);
    setUserId("");
    setPass("");
  };

  console.log(userList);

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-contents">
          <h2 style={{ fontFamily: "serif" }}>Shin-Lab</h2>
          <div className="form-wrapper">
            <input
              className="id"
              type="text"
              placeholder="ID"
              value={userId}
              onChange={onChangeIdText}
            />

            <input
              className="pass"
              type="text"
              placeholder="password"
              value={pass}
              onChange={onChangePassText}
            />

            <button className="login-box" type="submit" onClick={onClickLogin}>
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
