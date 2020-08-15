import React, { useState } from "react";

function Product(props) {
  const [prop, setProp] = useState(() => props);

  const fetchItems = async () => {
    const data = await fetch(
      "https://localhost:44324/api/v1/items?category=" + props.id
    );

    const items = await data.json();
    setState(items);
    return items;
  };

  if (props.id !== prop.id) {
    setProp(props);
    fetchItems();
  }

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
