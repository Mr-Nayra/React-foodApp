import classes from "./Header.module.css";
import React from "react";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
      <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div>
        <img
          src={mealsImg}
          className={classes["main-image"]}
          alt="table full of food"
        />
      </div>
    </>
  );
};

export default Header;
