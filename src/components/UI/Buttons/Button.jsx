import React, { Fragment } from "react";
import classes from "./button.module.scss";

function Button({ children, enteredType, className, onbtn }) {
  const allclasses = `${className} ${classes.button}`;

  return (
    <Fragment>
      <button
        onClick={onbtn}
        className={allclasses}
        type={enteredType || "button"}
      >
        {children}
      </button>
    </Fragment>
  );
}

export default Button;
