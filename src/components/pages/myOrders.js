import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../appState/appState'
import './myOrders.css'

function MyOrders() {
    const [context] = useContext(AppContext);
    let [orders, setOrders] = useState([]);


    useEffect(() => {
        if (context.userLogedIn)
            GetOrders()

        async function GetOrders() {
            await fetch("https://localhost:5001/api/v1/orders",
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + context.userToken,
                    },
                })
                .then(response => response.json())
                .then(result => {
                    setOrders(result)
                })
        }
    }, [context.userLogedIn, context.userToken])





    return (
        <div>
            {context.userLogedIn ?
                (
                    orders.map((o, index) => <div key={index}><hr /><button className="Order button">{o.orderInfo}, Ordernummer: {o.orderId}</button>
                        {o.items.map((i, index) => <div key={index + 'a'} className="Item">{i.itemName}</div>)}
                        <br />
                    </div>)
                )
                :
                (
                    <div>Du är ej inloggad.</div>
                )}
        </div>
    )
}

export default MyOrders;