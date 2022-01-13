import React from "react";

export default function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        getOrder = Function.prototype,
    } = props;
    return (
        <div className="card flex">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        getOrder({
                            id,
                            name,
                            price,
                        })
                    }>
                    Купить
                </button>
                <span className="right">{price} руб</span>
            </div>
        </div>
    );
}
