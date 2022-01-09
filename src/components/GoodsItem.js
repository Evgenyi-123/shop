import React from "react";

export default function GoodsItem(props) {
    const { id, name, description, price, full_background } = props;
    return (
        <div classNameName="card" id={id}>
            <div classNameName="card-image">
                <img src={full_background} alt={name} />
                <span classNameName="card-title">{name}</span>
            </div>
            <div classNameName="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}
