import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../../../appState/appState'
import './orderDetails.css'
import MyOrders from "./myOrders";


function MyOrder(match)
{
    const [context] = useContext(AppContext);
    let [order, setOrder] = useState();

    

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

    useEffect(() => {

        GetOrder();
    }, [context.userLogedIn, context.userToken]);



    console.log(order)

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
        (<div>
            None
        </div>)
        }
        </div>
    )
}



export default MyOrder;