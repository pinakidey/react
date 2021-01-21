import React from 'react';
import ElementModal from '@material-ui/core/Modal';
import styles from "./Modal.css";

const Modal = (props) => {
    return (
        <ElementModal
            className={[styles.Modal, props.className].join(' ')}
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            <div className={styles.ModalContent}>
                <h2 id="simple-modal-title">{props.title}</h2>
                <p id="simple-modal-description">{props.description}</p>
                {props.children}
            </div>
        </ElementModal>
    )
}

export default Modal;
