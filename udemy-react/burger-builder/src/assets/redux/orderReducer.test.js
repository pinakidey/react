import reducer from "./orderReducer";
import * as actionTypes from "./actionTypes"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    orders: [
        {
            orderId: uuidv4(),
            timestamp: Date.now(),
            ingredients: {sald: 1, bacon: 1, meat: 1, cheese: 2},
            price: 6
        }
    ]
};
const payload = {
    orderId: uuidv4(),
    timestamp: Date.now(),
    ingredients: {sald: 1, bacon: 1, meat: 1, cheese: 2},
    price: 6
};
describe('orderReducer()', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    });
    it('should return the initial state merged with payload', () => {
        expect(reducer([], {type: actionTypes.ADD_ORDER, payload: payload}))
        .toEqual([].concat([{...payload}]))
    });
});