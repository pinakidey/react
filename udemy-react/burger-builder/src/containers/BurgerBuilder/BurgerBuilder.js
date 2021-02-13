import React, {useReducer, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import Alert from '@material-ui/lab/Alert';
import axios from "./../../AxiosClient";
import BackDrop from "./../../components/common/BackDrop/BackDrop";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import Burger from "./../../components/Burger/Burger";
import CircularProgress from '@material-ui/core/CircularProgress';
import DispatchContext from "./../../assets/context/DispatchContext";
import IngredientContext from "./../../assets/context/IngredientContext";
import isEmpty from 'lodash/isEmpty';
import MuiAlert from '@material-ui/lab/Alert';
import OrderModal from "./../../components/OrderModal/OrderModal";
import Snackbar from '@material-ui/core/Snackbar';
import styles from "./BurgerBuilder.css";
import sortBy from 'lodash/sortBy';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../assets/redux/actions";

export const BurgerBuilder = (props) => {
    const LOAF_PRICE = 1.0;
    const dispatch = useDispatch();

    /* STATES */
    const [loading, setLoading] = useState(false);
    const [showOrderModal, setshowOrderModal] = useState(false);
    const [showSuccess, setshowSuccess] = useState(false);
    const [showError, setshowError] = useState(false);
    const [ordering, setOrdering] = useState(false);

    /* Redux States */
    const inventory = useSelector(state => state.ingredients) || [];
    const initialIngredients = Object.assign({},...inventory.map(o => ({[o.name] : 0})));
    /* WORKER FUNCTIONS */

    // Get Ingredients
    const fetchIngredients = () => {
        return dispatch => {
            setLoading(true);
            axios.get('https://udemy-react-94dcc-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                const sortedIngredientsList = sortBy(response.data, "layer").filter(item => Boolean(item));
                dispatch(actions.initializeIngredients(sortedIngredientsList));
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                localDispatch({type: 'fetch'});
                setLoading(false);
            });
        }
    }

    //Save order
    const postData = (data) => {
        return dispatch => {
            setOrdering(true);
            const payload = {
                orderId: uuidv4(),
                timestamp: Date.now(),
                ...data,
            };
            axios.post('/orders.json', payload)
            .then(response => {
                console.log(response);
                setshowOrderModal(false);
                localDispatch({type: "reset"});
                setshowSuccess(true);
                dispatch(storeInReduxAsync({...response.data, ...payload}));
                setTimeout(() => {
                    props.history.push("/orders");
                }, 1000);
            })
            .catch(error => {
                console.log(error);
                setshowError(true);
            }).finally(() => {
                setOrdering(false);
            });
        }
    }

    // Store in Redux Asynchronously
    // thunk TODO: move to actionCreator
    const storeInReduxAsync = (data) => {
        return (dispatch, getState) => setTimeout(() => { //don't overuse getState
            console.log("Current state ->", getState());
            return dispatch(actions.addOrder(data));
        }, 5000);
    }

    /* REDUCERS */
    const reducer = (state, action) => {
        switch (action.type) {
            case 'fetch':
            case 'reset':
                return initialIngredients;
            case 'increment':
                return Object.assign({}, state, {[action.property] : Math.max(state[action.property] + 1, 0)});
            case 'decrement':
                return Object.assign({}, state, {[action.property] : Math.max(state[action.property] - 1, 0)});
            default:
                return state;
        }
    }
    const [ingredients, localDispatch] = useReducer(reducer, initialIngredients);

    /* EVENT HANDLERS */
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setshowSuccess(false);
        setshowError(false);
    };

    const onPlaceOrder = (data) => {
        console.log(data);
        dispatch(postData(data));
    }

    /* HELPER FUNCTIONS */
    const totalPrice = (() => {
        let price = 0;
        if(ingredients) {
            Object.keys(ingredients).forEach(key => {
                price = price + (inventory.find(o => o.name === key) || {})["price"] * ingredients[key]
            });
            //return Math.round(price * 100 + Number.EPSILON) / 100;
        }
        return price > 0 ? (price + LOAF_PRICE).toFixed(2) : 0;
    })();

    /* USE EFFECTS */
    useEffect(() => {
        dispatch(fetchIngredients());
    }, [])

    /* RENDER FUNCTIONS */
    const renderSuccessAlert = () => {
        return (
            <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
                    Order Placed. <br/>Thank you!
                </MuiAlert>
            </Snackbar>
        );
    }
    const renderErrorAlert = () => {
        return (
            <Snackbar open={showError} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
                    Failed to place order due to an error. <br/>Please try again!
                </MuiAlert>
            </Snackbar>
        );
    }
    const renderIngredientsLoader = () => {
        return (
            <div className={styles.centered}>
                {loading ? <CircularProgress size={64} /> : <Alert severity="error" style={{width: "200px"}}>Oops! <br/>Our Cook is out of town!</Alert>}
            </div>
        );
    }

    const renderContents = () => {
        return (
            <>
                <Burger />
                <BuildControls totalPrice={totalPrice} order={setshowOrderModal}/>
                <BackDrop open={showOrderModal} onClose={() => setshowOrderModal(false)} />
                {showOrderModal && <OrderModal totalPrice={totalPrice} open={showOrderModal} onClose={() => setshowOrderModal(false)} onPlaceOrder={onPlaceOrder} saving={ordering}/>}
                {renderSuccessAlert()}
                {renderErrorAlert()}
            </>
        );
    }

    return (
        <DispatchContext.Provider value={localDispatch}>
            <IngredientContext.Provider value={ingredients}>
                {isEmpty(ingredients) ? renderIngredientsLoader() : renderContents()}
            </IngredientContext.Provider>
        </DispatchContext.Provider>
    );
}

export default BurgerBuilder;