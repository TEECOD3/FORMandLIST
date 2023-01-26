import React, { useState } from "react";
import CourseAddUser from "./components/CourseAddUser";
import classes from "./App.module.scss";
import Courselist from "./components/Courselists/Courselist";

const courses = [
  { courseNames: "english", ages: 34, id: 9203 },
  { courseNames: "french", ages: 34, id: 8492 },
];

function App() {
  const [course, setCourse] = useState(courses);

  const courseadded = function (addedcourse) {
    const newcourse = { ...addedcourse, id: Math.random().toString() };
    setCourse((prevState) => {
      return [...prevState, newcourse];
    });
  };
  return (
    <React.Fragment>
      <div className={classes.App}>
        <CourseAddUser addedcourse={courseadded} />
        <Courselist courses={course} />
      </div>
    </React.Fragment>
  );
}

export default App;
