import React from "react";

export default function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart light-blue white-text" onClick={handleBasketShow}>
            <i className="material-icons">local_grocery_store</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}
