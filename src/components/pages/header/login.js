import React, { useContext, useRef } from "react";
import { AppContext } from '../../../appState/appState'
import "./login.css";

// Alla komponenter måste börja med versal ! !  !!

function LoginComponent() {
  const [context, setContext] = useContext(AppContext);
  const UserNameInput = useRef();
  const PasswordInput = useRef();


  //const logedInResponseInfo = useSelector((token) => token.tokenHandler)
  //console.log('Login response: ' + logedInResponseInfo);


  function AuthenticatePreCheck(e) {
    e.preventDefault();
    const username = UserNameInput.current.value;
    const password = PasswordInput.current.value;

    if (username !== "" && password !== "" && !context.userLogedIn) {
      //setContext({ ...context, userName: "xxxxxxx" })
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
        <div>Welcome {context.userName}</div>
      ) : (
          <div>
            <input className="textInputField"
              ref={UserNameInput}
              type="text"
              placeholder="Username"></input>
            <input className="textInputField"
              ref={PasswordInput}
              type="password"
              placeholder="Password"
            ></input>
          </div>
        )}

      {context.userLogedIn ? (
        <button onClick={() => LogOut()}>Logout</button>
      ) : (
          <div className="logButtons">
            <button
              onClick={(e) => {
                AuthenticatePreCheck(e);
              }}
            >
              Login
          </button>
          </ div>
        )}
    </div>
  );






  async function Authenticate(username, password) {
    const payload = { username: username, password: password };
    const apiBaseUrl = global.config.apiBaseUrl + ":" + global.config.apiPort + "/api/" + global.config.apiVersion
    setContext({ ...context, userName: 'rrrrrrr' })
    await fetch(apiBaseUrl + "/authenticate/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(response => checkLogin(response))
      .catch((err) => console.log("Error: " + err));

    async function checkLogin(result) {
      if (result.ok) {
        let a = await result.json();
        setContext({ ...context, userToken: a.token, userLogedIn: true, userName: a.name })
        return a;
      }
      else {
        if (result.status === 401)
          alert('Bad username or password!');
        else
          alert('Unexpected error!')
        return result
      }
    }
  }










}

export default LoginComponent;





