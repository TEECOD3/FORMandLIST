import React, { Fragment } from "react";
import classes from "./ErrorModal.module.scss";
import ReactDOM from "react-dom";
import Card from "../Cards/Card";
import Button from "../Buttons/Button";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const OverlayModal = ({ title, message, onConfirm }) => {
  return (
    <Card className={classes.error}>
      <h1>{title}</h1>
      <p>{message}</p>
      <div className={classes.btn}>
        <Button className={classes.errbtn} onbtn={onConfirm}>
          okay
        </Button>
      </div>
    </Card>
  );
};

function ErrorModal({ onConfirm, title, message }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop__back")
      )}

      {ReactDOM.createPortal(
        <OverlayModal title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlayModal")
      )}
    </Fragment>
  );
}

export default ErrorModal;
