import React, { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart(props) {
    const { order, handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const quantity = order.length;
    return (
        <div className="cart light-blue white-text" onClick={handleBasketShow}>
            <i className="material-icons">local_grocery_store</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}
