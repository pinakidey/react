import * as actionTypes from "./actionTypes"

/* const initialState = {
    appName: "Burger Builder",
    orders: {}
}; */

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_ORDERS:
            return state.orders;
        case actionTypes.ADD_ORDER:
            return state.concat([{...state.orders, ...action.payload}]);
        case actionTypes.DELETE_ORDER:
            return state.filter(order => order.orderId != action.payload);
        default:
            break;
    }
    return state;
}

export default reducer;