import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoged, saveToken, remoteAPI } from "../../../store/actions";

async function Authenticate(dispatch, username, password) {
  const payload = { username: username, password: password };

  const apiBaseUrl = global.config.apiBaseUrl + ":" + global.config.apiPort + "/api/" + global.config.apiVersion


  console.log("Authing..");

  // {global.config.apiBaseUrl}:{global.config.port}/api/{global.config.apiVersion}
  await fetch(apiBaseUrl + "/authenticate/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((x) => x.json())
    .then((resp) => {
      dispatch(isLoged(true));
      dispatch(saveToken(resp.token));
      console.log(resp.token)
    })
    .catch((err) => console.log("Error: " + err));


}

function LoginComponent() {
  useState([]);
  const UserNameInput = useRef();
  const PasswordInput = useRef();
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.isLoged);

  function AuthenticatePreCheck() {
    const username = UserNameInput.current.value;
    const password = PasswordInput.current.value;

    if (username !== "" && password !== "" && !loged)
      Authenticate(dispatch, username, password);
    else console.log("Cannot authenticate!" + username + password);
  }

  function LogOut() {
    dispatch(saveToken(null));
    dispatch(isLoged(false));
  }

  return (
    <div>
      {loged ? (
        <div>Welcome Mr.X</div>
      ) : (
          <div>
            <input ref={UserNameInput} type="text" placeholder="Username"></input>
            <input
              ref={PasswordInput}
              type="password"
              placeholder="Password"
            ></input>
          </div>
        )}

      {loged ? (
        <button onClick={() => LogOut()}>Logout</button>
      ) : (
          <button
            onClick={() => {
              AuthenticatePreCheck();
            }}
          >
            Login
          </button>
        )}
    </div>
  );
}

export default LoginComponent;
