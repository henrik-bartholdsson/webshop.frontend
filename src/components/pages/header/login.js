import React, { useContext, useRef } from "react";
import { AppContext } from '../../../appState/appState'
import { Link } from "react-router-dom";
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



  ////////////// react navbar, html navbar

  return (
    <div className="LoginContainer">
      {context.userLogedIn ? (
        <div>
          <div className="WellcomeUser"> Welcome
            <ul>
              <li className="dropdown">
                <a className="dropbtn">{context.userName}</a>
                <div className="dropdown-content">
                  <div className="MyOrdersLink">
                    {context.userLogedIn ?
                      (<Link to={"/myorders"}>Mina ordrar</Link>) :
                      (<div />)}
                  </div>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="LogButtons">
            <button onClick={() => LogOut()}>Logout
          </button>
          </div>
        </div>
      ) : (
          <div className="Login">
            <div className="InputFields">
              <input ref={UserNameInput}
                type="text"
                placeholder="Username"></input>
              <input ref={PasswordInput}
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="LogButtons">
              <button
                onClick={(e) => {
                  AuthenticatePreCheck(e);
                }}>
                Login
                </button>
            </div>
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





