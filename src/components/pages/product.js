import React, { useState, useContext } from "react";
import "./product.css";
import { AppContext } from '../../appState/appState'

function Product({ match }) {
  const [context] = useContext(AppContext)
  const [pageNr, setPageNr] = useState(() => match.params.id);
  const baseUrl = global.config.apiBaseUrl + ":" + global.config.apiPort + "/api/" + global.config.apiVersion

  const fetchItems = async () => {
    const data = await fetch(
      baseUrl + "/items?category=" + match.params.id
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

  function addToBasket(product) {
    context.basket.push(product);
  }

  return (
    <div>
      {state ? (
        state.map((product) => (
          <div key={product.id} className="Product">
            <div>
              <div className="ProductHeader" key={product.id}>
                {product.name}
              </div>
              <div className="ProductDescription">{product.description}</div>
              <button onClick={() => addToBasket(product)} className="BasketAddLink">
                Lägg i korg
            </button>
              <div className="PriceContainer">
                <div className="PriceText">Pris:</div>
                <div className="ProductPrice" style={{ textDecoration: product.extraPriceActive === true ? 'line-through' : 'none' }} >{product.price}</div>
                {product.extraPriceActive ? (<div className="ProductExtraPrice">{product.extraPrice}</div>) : (<></>)}
              </div>
            </div>
          </div>
        ))
      ) : (
          <h1>Loading</h1>
        )}
    </div>
  );
}

export default Product;
