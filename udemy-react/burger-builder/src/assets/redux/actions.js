import * as actionTypes from "./actionTypes"

const actions = {
        getOrders: () => ({type: actionTypes.GET_ORDERS}),
        addOrder: (order) => ({type: actionTypes.ADD_ORDER, payload: order}),
        deleteOrder: (orderId) => ({type: actionTypes.DELETE_ORDER, payload: orderId}),

        addFilling: (filling) => ({type: actionTypes.ADD_FILLING, payload: filling}),
        removeFilling: (filling) => ({type: actionTypes.REMOVE_FILLING, payload: filling}),
        resetFillings: (filling) => ({type: actionTypes.RESET_FILLINGS, payload: filling}),

        initializeIngredients: (ingredients) => ({type: actionTypes.INITIALIZE_INGREDIENTS, payload: ingredients}),
}

export default actions;