import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import styles from "./BackDrop.css";
//import CircularProgress from '@material-ui/core/CircularProgress';

export default function ElementBackDrop(props) {

    return (
        <Backdrop className={styles.BackDrop} open={props.open} onClick={props.onClose}>
            {/* <CircularProgress color="inherit" /> */}
        </Backdrop>
    );
}
