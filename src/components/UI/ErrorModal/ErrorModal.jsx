import React, { Fragment } from "react";
import classes from "./ErrorModal.module.scss";
import Card from "../Cards/card";
import Button from "../Buttons/button";

function ErrorModal({ title, message, onConfirm }) {
  return (
    <Fragment>
      <div className={classes.backdrop} />
      <Card className={classes.error}>
        <h1>{title}</h1>
        <p>{message}</p>
        <div className={classes.btn}>
          <Button className={classes.errbtn} onbtn={onConfirm}>
            okay
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}

export default ErrorModal;
