import React, { useState } from "react";

function Product({ match }) {
  console.log(match);
  const fetchItems = async () => {
    const data = await fetch(
      "https://localhost:44324/api/v1/items?category=" + match.params.id
    );

    const items = await data.json();
    setState(items);
    return items;
  };

  const [state, setState] = useState(() => {
    fetchItems();
  });

  return (
    <div>
      {state ? state.map((s) => <p key={s.id}>{s.name}</p>) : <h1>Empty</h1>}
    </div>
  );
}

export default Product;
