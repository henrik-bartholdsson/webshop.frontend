import React, { useContext, useEffect } from "react"
import { AppContext } from '../../appState/appState'
import "./basket.css"

function Basket() {
    const apiUrl = global.config.apiBaseUrl + ":" + global.config.apiPort + "/api/" + global.config.apiVersion
    const [context] = useContext(AppContext);
    let fakeId = 0;

    let totalPrice = CalculateTotalPrice(context.basket);

    async function PlaceOrder() {
        if (!context.userLogedIn) {
            alert('Du måste loga in')
            return;
        }

        let payload = {
            items: [],
            OrderInfo: "Order från front"
        }

        if (!context.basket.length > 0) {
            alert('Varukorgen är tom!')
            return
        }
        else {
            payload.items = GatherItemsToPayload(context.basket);
        }

        await fetch(apiUrl + "/orders", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + context.userToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
            .then(resp => resp.json())
            .then(result => alert('Order skapad, din order har ordernummer: ' + result.orderId))
        EmptyBasket()
    }

    function EmptyBasket() {
        window.location.reload();
        context.basket = [];
    }

    useEffect(() => {
        if (context.basket.length > 0) {
            document.getElementById("emptyButton").disabled = false;
            document.getElementById("placeOrderButton").disabled = false
        } else {
            document.getElementById("emptyButton").disabled = true;
            document.getElementById("placeOrderButton").disabled = true
        }
    })

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
                <button id="emptyButton" className="EmptyBasket" onClick={EmptyBasket}>Töm varukorgen</button>
                <button id="placeOrderButton" className="PlaceOrderButton" onClick={PlaceOrder}>Skicka order</button>

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

function GatherItemsToPayload(context) {
    let result = [];
    context.forEach(i => {
        result.push(i.id)
    });
    return result
}



export default Basket;