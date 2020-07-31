import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props);
    let arrayIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }) 
        .reduce((arr,el) => {
            return arr.concat(el);
        }, []);

    if (arrayIngredients.length === 0) {
        arrayIngredients = <p>Please start Adding Ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {arrayIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;