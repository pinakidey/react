import React from 'react'
import styles from "./Logo.css";
import logoImage from "./../../assets/images/burger-logo.png";

const Logo = (props) => {
    return (
        <div className={styles.Logo} style={{height: props.height}}>
            <img src={logoImage} alt="Logo"/>
        </div>
    )
}

export default Logo;
