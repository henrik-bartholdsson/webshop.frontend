import React, { useState } from "react";
import Test from "./test";

function GetMenu() {
  const fetchItems = async () => {
    const data = await fetch("https://localhost:44324/api/v1/categories");
    const result = await data.json();

    setState(result);
    return result;
  };

  const [state, setState] = useState(() => {
    fetchItems();
  });

  return <Test props={state} />;
}

export default GetMenu;

// Objektet ska skickas till en funktions komponent
//      som kan anropa sig själv om det finns underkategorier.
