import * as actionTypes from "./actionTypes"

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.RESET_FILLINGS:
            return {
                ...state,
                ingredients: Object.assign({},...action.payload.map(o => ({[o.name] : 0})))
            };
        case actionTypes.ADD_FILLING:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload] : Math.max(state.ingredients[action.payload] + 1, 0)
                }
            };
        case actionTypes.REMOVE_FILLING:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload] : Math.max(state.ingredients[action.payload] - 1, 0)
                }
            };
        default:
            return state;
    }
}

export default reducer;