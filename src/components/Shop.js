import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import Alert from "./Alert";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    const getOrder = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id,
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const addCountOrder = (itemId) => {
        const newCount = order.map((orderCount) => {
            if (orderCount.id === itemId) {
                const newQuantity = orderCount.quantity + 1;
                return {
                    ...orderCount,
                    quantity: newQuantity,
                };
            } else {
                return orderCount;
            }
        });
        setOrder(newCount);
    };

    const removeCountOrder = (itemId) => {
        const newCount = order.map((orderCount) => {
            if (orderCount.id === itemId) {
                const newQuantity = orderCount.quantity - 1;
                return {
                    ...orderCount,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return orderCount;
            }
        });
        setOrder(newCount);
    };
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const closeAlert = () => {
        setAlertName("");
    };
    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} getOrder={getOrder} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    addCountOrder={addCountOrder}
                    removeCountOrder={removeCountOrder}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}
