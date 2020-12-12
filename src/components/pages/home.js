import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../../appState/appState'
import DisplayData from "./temp";

function Home() {
  const [info, setInfo] = useState({ data: "" });
  const [context] = useContext(AppContext);


  useEffect(() => {
    if (context.userLogedIn && info.data === "") {
      GetValues();

      async function GetValues() {
        await fetch(global.config.apiUrl + "/values", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + context.userToken,
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setInfo({ ...info, data: result.data });
          });
      }
    } else {
      info.data = "";
    }
  }, [context.userLogedIn, context.userToken, info]);

  return (
    <div style={{ padding: "12px" }}>
      <h2>Home page</h2>
      <div>
        {context.userLogedIn ? <div>Inloggad! :) </div> : <div>Ej inloggad</div>}
      </div>
      <div>
        <DisplayData data={info.data} />
      </div>
      <div style={{ color: "red" }}>Name = {context.userName}</div>
    </div>
  );


}

export default Home;
