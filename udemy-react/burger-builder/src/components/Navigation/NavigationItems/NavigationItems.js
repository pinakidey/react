import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import styles from "./NavigationItems.css";


const NavigationItems = () => {

    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/">Customize</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            <NavigationItem link="/account">Account</NavigationItem>
        </ul>
    )
}

export default NavigationItems;
