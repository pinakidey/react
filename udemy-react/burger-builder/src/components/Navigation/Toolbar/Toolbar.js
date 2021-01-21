import React from 'react'
import styles from "./Toolbar.css";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuIcon from '@material-ui/icons/Menu';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <MenuIcon className={styles.Menu} onClick={props.toggleSideDrawer} />
            <Logo height="80%"/>
            <nav className={styles.DesktopOnly}><NavigationItems {...props}/></nav>
        </header>
    )
}

export default Toolbar;
