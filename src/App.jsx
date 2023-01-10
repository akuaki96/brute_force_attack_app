import { useState } from "react";
import classes from "./components/CssModule.module.scss";

// import {userId}

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
      <div className={classes.pageWrapper}>
        <div className={classes.pageContents}>
          <h2 style={{ fontFamily: "serif" }}>Shin-Lab</h2>

          <div className={classes.formWrapper}>
            <input
              className={classes.id}
              type="text"
              placeholder="ID"
              value={userId}
              onChange={onChangeIdText}
            />

            <input
              className={classes.pass}
              type="text"
              placeholder="password"
              value={pass}
              onChange={onChangePassText}
            />

            <button
              className={classes.loginBox}
              type="submit"
              onClick={onClickLogin}
            >
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
