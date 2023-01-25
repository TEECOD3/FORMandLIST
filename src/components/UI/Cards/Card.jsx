import React from "react";
import classes from "./card.module.scss";

function Card({ children, className }) {
  const allCLasses = `${classes.card} ${className}`;
  return (
    <>
      <div className={allCLasses}>{children}</div>
    </>
  );
}

export default Card;
