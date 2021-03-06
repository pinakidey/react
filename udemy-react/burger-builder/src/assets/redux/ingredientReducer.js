import * as actionTypes from "./actionTypes"

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.INITIALIZE_INGREDIENTS:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;