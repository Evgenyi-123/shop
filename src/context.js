import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.getOrder = (item) => {
        dispatch({ type: "GET_ORDER", payload: item });
    };

    value.addCountOrder = (itemId) => {
        dispatch({ type: "ADD_COUNT_ORDER", payload: { id: itemId } });
    };

    value.removeCountOrder = (itemId) => {
        dispatch({ type: "REMOVE_COUNT_ORDER", payload: { id: itemId } });
    };

    value.closeAlert = () => {
        dispatch({ type: "CLOSE_ALERT" });
    };

    value.removeFromBasket = (itemId) => {
        dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
    };

    value.handleBasketShow = () => {
        dispatch({ type: "HANDLE_BASKET_SHOW" });
    };

    value.setGoods = (data) => {
        dispatch({ type: "SET_GOODS", payload: data });
    };
    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
