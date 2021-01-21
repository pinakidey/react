import React, {useContext} from 'react';
import IngredientContext from "./../../assets/context/IngredientContext";
import Modal from "./../common/Modal/Modal";
import Button from "./../common/Button/Button";
import styles from "./OrderModal.css";
import CircularProgress from '@material-ui/core/CircularProgress';

const OrderModal = (props) => {
    const ingredients = useContext(IngredientContext);

    return (
        <Modal
            className={styles.OrderModal}
            open={props.open}
            onClose={props.onClose}
            title="Order Summary"
            description="Confirm the fillings & Click PLACE ORDER"
            >
            <table>
                <thead>
                    <tr key="header">
                        <th>Fillings</th><th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(ingredients).map(item => {
                        return (
                            <tr key={item}>
                                <td>{`${item[0].toUpperCase()}${item.slice(1)}`}</td><td>{ingredients[item]}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr key="footer" className={styles.footer}>
                        <td>Total Price: $ </td><td>{props.totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
            <div className={styles.buttonsContainer}>
                <div className={styles.wrapper}>
                    <Button variant="contained" color="primary" disabled={props.saving} onClick={() => props.onPlaceOrder({ingredients, price: props.totalPrice})}>Place Order</Button>
                    {props.saving && <CircularProgress size={24} className={styles.buttonProgress} />}
                </div>
                <Button variant="contained" color="secondary" disabled={props.saving} onClick={props.onClose}>Cancel</Button>
            </div>
        </Modal>
    )
}

export default OrderModal;
