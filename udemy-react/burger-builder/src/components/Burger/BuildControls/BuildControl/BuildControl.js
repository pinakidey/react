import React, {useContext} from 'react'
import styles from "./BuildControl.css";
import DispatchContext from "./../../../../assets/context/DispatchContext";
import Button from "./../../../common/Button/Button";

const BuildControl = (props) => {
    const dispatch = useContext(DispatchContext);
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{`${props.label[0].toUpperCase()}${props.label.slice(1)}`}</div>
            <Button disabled={props.count === 0} variant="contained" color="secondary" onClick={() => dispatch({property: props.label, type: 'decrement'})}>Less</Button>
            <Button variant="contained" color="primary" onClick={() => dispatch({property: props.label, type: 'increment'})}>More</Button>
            <div className={styles.Count}>{props.count}</div>
        </div>
    );
}

export default BuildControl;
