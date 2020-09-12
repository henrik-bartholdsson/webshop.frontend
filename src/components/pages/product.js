import React, { useState } from "react";
import "./product.css";

function Product({ match }) {
  const [pageNr, setPageNr] = useState(() => match.params.id);

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
        state.map((p) => (
          <div key={p.id} className="Product">
            <div>
              <div className="ProductHeader" key={p.id}>
                {p.name}
              </div>
              <div className="ProductDescription">{p.description}</div>
            </div>
            <a href={""} className="Basket">
              Lägg i korg
            </a>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Product;
