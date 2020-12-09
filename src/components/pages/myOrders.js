import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../appState/appState'
import './myOrders.css'

function MyOrders() {
    const [context] = useContext(AppContext);
    let [orders, setOrders] = useState([]);



    async function GetOrders() {
        await fetch("http://localhost:54339/api/v1/orders",
            {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + context.userToken,
                },
            })
            .then(resp => resp.json())
            .then(res => {
                setOrders(res)
            })
    }


    useEffect(() => {
        if (context.userLogedIn)
            GetOrders()
    }, [context.userLogedIn])





    return (
        <div>
            {context.userLogedIn ?
                (
                    orders.map((o, index) => <div key={index}><hr /><div className="Order">{o.orderInfo}, Ordernummer: {o.orderId}</div>
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