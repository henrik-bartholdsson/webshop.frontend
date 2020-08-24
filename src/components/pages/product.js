import React, { useState } from "react";
import "./product.css";

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
      {state ? (
        state.map((s) => (
          <div className="Product">
            <div className="ProductHeader" key={s.id}>
              {s.name}
            </div>
            <div className="ProductDescription">{s.description}</div>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Product;
