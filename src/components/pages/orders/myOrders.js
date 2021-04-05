import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../appState/appState'
import './myOrders.css'
import { Link } from "react-router-dom";

function MyOrders() {
    const [context] = useContext(AppContext);
    let [orders, setOrders] = useState([]);


    useEffect(() => {
        if(!context.userLogedIn)
        window.location = '/';

        if (context.userLogedIn)
            GetOrders()

        async function GetOrders() {
            await fetch(global.config.apiUrl + "/orders",
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
                    orders.map((order, index) => <div key={index}><hr /><Link to={"/myOrders/" + order.orderId} key={order.orderId} className="Order button">{order.orderInfo}, Ordernummer: {order.orderId}</Link>
                        {order.items.map((i, index) => <div key={index + 'a'} className="Item">{i.itemName}</div>)}
                        <br />
                    </div>)
                )
                :
                (
                    <div>Du är utloggad.</div>
                )}
        </div>
    )
}

export default MyOrders;