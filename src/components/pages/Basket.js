import React, { useContext } from "react"
import { AppContext } from '../../appState/appState'
import "./basket.css"

function Basket() {
    const [context, setContext] = useContext(AppContext);
    let fakeId = 0;

    let totalPrice = CalculateTotalPrice(context.basket);

    function PlaceOrder() {
        alert('Ordern är nu skapad')
        EmptyBasket()
    }

    function EmptyBasket() {
        window.location.reload();
        context.basket = [];
    }

    return (
        <div>
            <div className="BasketContainer">
                <h3 className="BasketHeader">Varukorgen</h3>
                <hr />
                <ul className="BasketList">
                    {context.basket.length > 0 ? (

                        context.basket.map(obj => <li key={fakeId++} className="row">
                            <div className="ItemName">{obj.name}</div>
                            <div className="PriceContainer">
                                {obj.extraPriceActive ?
                                    (<div className="ExtraPrice">{obj.extraPrice}</div>) :
                                    (<div className="Price">{obj.price}</div>)}
                            </div>
                        </li>)
                    ) :
                        (<div></div>)}
                </ul>
                <hr />
                <div className="TotalPrice">Total: {totalPrice}</div>
                <br />
                <button className="EmptyBasket" onClick={EmptyBasket}>Töm varukorgen</button>
                <button className="PlaceOrderButton" onClick={PlaceOrder}>Skicka order</button>

            </div>
        </div>
    )
}

function CalculateTotalPrice(basket) {
    let result = 0;
    basket.forEach(element => {

        if (element.extraPriceActive)
            result += parseFloat(element.extraPrice)
        else
            result += parseFloat(element.price)
    });
    return result;
}



export default Basket;