import React, { Fragment } from "react";
import Courseitem from "./Courseitem";
import classes from "./Courselist.module.scss";

function Courselist({ courses }) {
  return (
    <Fragment>
      <div className={classes.courselist}>
        {courses.map((course) => (
          <Courseitem
            course={course.courseNames}
            key={course.id}
            age={course.ages}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default Courselist;
