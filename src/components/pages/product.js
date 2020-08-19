import React, { useState } from "react";

function Product({ match }) {
  const [pageNr, setPageNr] = useState(() => match.params.id);
  console.log(pageNr);
  console.log(match.params.id);

  const fetchItems = async () => {
    const data = await fetch(
      "https://localhost:44324/api/v1/items?category=" + match.params.id
    );

    const items = await data.json();
    setState(items);
    return items;
  };

  if (pageNr !== match.params.id) {
    setPageNr(match.params.id);
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
