import React from 'react';
import styles from "./SideDrawer.css";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../common/BackDrop/BackDrop';

const SideDrawer = (props) => {
    //...
    return (
        <>
            <BackDrop open={props.show} onClose={() => props.toggleSideDrawer()}></BackDrop>
            <div className={[styles.SideDrawer, props.show ? styles.Open : styles.Close].join(" ")}>
                <Logo height="8%" onClick={() => props.toggleShowSideDrawer(!props.show)}/>
                <nav><NavigationItems/></nav>
            </div>
        </>
    )
}

export default SideDrawer;
