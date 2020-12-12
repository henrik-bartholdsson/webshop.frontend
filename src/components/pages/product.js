import React, { useState, useContext } from "react";
import "./product.css";
import { AppContext } from '../../appState/appState'

function Product({ match }) {
  const [context] = useContext(AppContext)
  const [pageNr, setPageNr] = useState(() => match.params.id);

  const fetchItems = async () => {
    const data = await fetch(
      global.config.apiUrl + "/items?category=" + match.params.id
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
              <div className="ProductAvalibleIcon">
                {product.avalible <= 0 ? (<div title="Ej i lager" className="ProductAvalibleBad">&#128711;</div>) : (<div />)}
                {product.avalible <= 5 && product.avalible > 0 ? (<div title="Mindre än 5" className="ProductAvalibleLow">&#128710;</div>) : (<div />)}
                {product.avalible > 5 ? (<div title="I lager" className="ProductAvalibleGood">&#128402;</div>) : (<div />)}
              </div>
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
