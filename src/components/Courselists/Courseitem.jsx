import React, { Fragment, fragment } from "react";
import classes from "./courseitem.module.scss";

function Courseitem({ course, age }) {
  return (
    <Fragment>
      <div className={classes.courseitem}>
        <span>{course}</span>
        <span>{age} years</span>
      </div>
    </Fragment>
  );
}

export default Courseitem;
