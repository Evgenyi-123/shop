import React from "react";

export default function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        addCountOrder = Function.prototype,
        removeCountOrder = Function.prototype,
    } = props;
    return (
        <div>
            <li className="collection-item ">
                {name} x{" "}
                <button
                    className="btn-count teal lighten-2"
                    onClick={() => addCountOrder(id)}>
                    +
                </button>
                {quantity}
                <button
                    className="btn-count teal lighten-2"
                    onClick={() => removeCountOrder(id)}>
                    -
                </button>{" "}
                ={price * quantity} руб.
                <span className="secondary-content">
                    <i
                        className="material-icons basket-delete"
                        onClick={() => removeFromBasket(id)}>
                        close
                    </i>
                </span>
            </li>
        </div>
    );
}
