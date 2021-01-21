import React, {useContext} from 'react'
import styles from "./BuildControls.css";
import BuildControl from './BuildControl/BuildControl';
import DispatchContext from "./../../../assets/context/DispatchContext";
import IngredientContext from "./../../../assets/context/IngredientContext";
import Button from "./../../common/Button/Button";
import Alert from '@material-ui/lab/Alert';

const BuildControls = (props) => {
    const dispatch = useContext(DispatchContext);
    const ingredients = useContext(IngredientContext);
    const fillingsCount = Object.values(ingredients).reduce((a, b) => a + b, 0);
    return (
        <div className={styles.BuildControls}>
            {Object.keys(ingredients).map(type =>
                <BuildControl
                    key={type}
                    label={type}
                    count={ingredients[type]}
                />
            )}
            <Alert severity="success">{`Total Price: $ ${props.totalPrice}`}</Alert>
            <div className={styles.ButtonContainer}>
                <Button disabled={fillingsCount === 0} size="large" variant="contained" color="secondary" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
                <Button disabled={fillingsCount === 0} size="large" variant="contained" color="primary" onClick={() => props.order(true)}>Order</Button>
            </div>
        </div>
    )
}

export default BuildControls;