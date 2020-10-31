import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DisplayData from "./temp";

function Home() {
  const apiUrl = global.config.apiBaseUrl + ":" + global.config.apiPort + "/api/" + global.config.apiVersion
  const [info, setInfo] = useState({ data: "eempty" });

  const loged = useSelector((state) => state.isLoged);
  const token = useSelector((state) => state.tokenHandler);

  useEffect(() => {
    console.log("Effect is running, loged: " + loged);

    if (loged) {
      GetValues(token);
    } else setInfo({ ...info, data: "empty" });
  }, [token]);

  return (
    <div style={{ padding: "12px" }}>
      <div>Home...</div>
      <div>Start page of application</div>
      <div>
        That will use a token:{" "}
        {loged ? <div>In loggad! :) </div> : <div>Ej in loggad</div>}
      </div>
      <div>
        <DisplayData data={info.data} />
      </div>
      <div>api = {apiUrl}</div>
    </div>
  );

  async function GetValues(token) {

    return await fetch(apiUrl + "/values", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((x) => x.json())
      .then((response) => {
        setInfo({ ...info, data: response.data });
      });
  }
}

export default Home;
