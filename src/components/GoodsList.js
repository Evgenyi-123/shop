import React from "react";
import GoodsItem from "./GoodsItem";

export default function GoodsList(props) {
    const [goods = []] = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    );
}
