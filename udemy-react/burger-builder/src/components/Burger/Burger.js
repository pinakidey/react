import React, {useContext} from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.css";
import IngredientContext from "./../../assets/context/IngredientContext";

export default function Burger(props) {
    const ingredients = useContext(IngredientContext);
    const fillings = Object.keys(ingredients)
        .map(type => {
            return [...Array(ingredients[type])].map((_, i) => {
                return (<BurgerIngredient key={`${type}-${i}`} type={type}/>);
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        } , []);

    return (
        <div className={styles.Burger}>
            <BurgerIngredient key="top" type="bread-top"/>
                {fillings.length === 0 ? <p>Please add Fillings</p> : fillings}
            <BurgerIngredient key="bottom" type="bread-bottom"/>
        </div>
    )
}
