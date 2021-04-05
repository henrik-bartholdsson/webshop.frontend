import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../../../appState/appState'
import './orderDetails.css'


function MyOrder(match)
{
    const [context] = useContext(AppContext);
    let [order, setOrder] = useState();

    useEffect(() => {

        if(!context.userLogedIn)
        window.location = '/';

        GetOrder();

        async function GetOrder() {
            await fetch(global.config.apiUrl + "/orders/" + match.match.params.id,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + context.userToken,
                    },
                })
                .then(response => response.json())
                .then(result => {
                    setOrder(result)
                })
        }

    }, [context.userLogedIn, context.userToken, match.match.params.id]);


    return (
        <div>
        {
        order ?
        (<div>
            <p>{order.orderInfo} {order.orderId} {order.status}</p>
            Items
            {order.items.map((item, index) => <p key={index + 'a'}>{item.itemName}</p>)}
        </div>)
        :
        (
            <div>Du är utloggad.</div>
            )
        }
        </div>
    )
}

// <Redirect to="/" />

export default MyOrder;