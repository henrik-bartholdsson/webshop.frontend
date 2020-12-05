import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../../appState/appState'
import DisplayData from "./temp";

function Home() {
  const apiUrl = global.config.apiBaseUrl + ":" + global.config.apiPort + "/api/" + global.config.apiVersion
  const [info, setInfo] = useState({ data: "eempty" });
  const [context] = useContext(AppContext);


  useEffect(() => {
    if (context.userLogedIn) {
      GetValues();
    }
  }, [context.userLogedIn]);

  return (
    <div style={{ padding: "12px" }}>
      <div>Home...</div>
      <div>Start page of application</div>
      <div>
        That will use a token:{" "}
        {context.userLogedIn ? <div>Inloggad! :) </div> : <div>Ej inloggad</div>}
      </div>
      <div>
        <DisplayData data={info.data} />
      </div>
      <div>api = {apiUrl}</div>
      <div style={{ color: "red" }}>Name = {context.userName}</div>
    </div>
  );

  async function GetValues() {
    await fetch(apiUrl + "/values", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + context.userToken,
      },
    })
      .then((x) => x.json())
      .then((response) => {
        setInfo({ ...info, data: response.data });
      });
  }
}

export default Home;
