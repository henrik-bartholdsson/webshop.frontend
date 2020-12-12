import React, { useContext, useRef } from "react";
import { AppContext } from '../../../appState/appState'
import "./login.css";

function LoginComponent() {
  const [context, setContext] = useContext(AppContext);
  const UserNameInput = useRef();
  const PasswordInput = useRef();

  function AuthenticatePreCheck(e) {
    e.preventDefault();

    const username = "henrik"
    const password = "Password@123"

    if (username !== "" && password !== "" && !context.userLogedIn) {
      Authenticate(username, password);
    }
    else alert('Username & Password needed')
  }

  function LogOut() {
    setContext({ ...context, userToken: '', userLogedIn: false, userName: '' })
  }

  return (
    <div className="loginComponent">
      {context.userLogedIn ? (
        <div><div>Welcome {context.userName}</div>
          <button onClick={() => LogOut()}>Logout</button>
        </div>
      ) : (
          <div className="textInputField">
            <input ref={UserNameInput}
              type="text"
              placeholder="Username"></input>
            <input ref={PasswordInput}
              type="password"
              placeholder="Password"
            ></input>
            <button
              onClick={(e) => {
                AuthenticatePreCheck(e);
              }}
            >
              Login
          </button>
          </div>
        )}

    </div>
  );


  async function Authenticate(username, password) {
    const payload = { username: username, password: password };
    await fetch(global.config.apiUrl + "/authenticate/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(response => checkLogin(response))
      .catch((err) => console.log("Error: " + err));

    async function checkLogin(response) {
      if (response.ok) {
        let result = await response.json();
        setContext({ ...context, userToken: result.token, userLogedIn: true, userName: result.name })
      }
      else {
        if (response.status === 401)
          alert('Bad username or password!');
        else
          alert('Unexpected error!')
        return response
      }
    }
  }
}

export default LoginComponent;





