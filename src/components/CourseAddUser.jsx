import classes from "./CourseGoals.module.scss";
import { Fragment, React, useState, Ref, useRef } from "react";
import Button from "./UI/Buttons/button";
import Card from "./UI/Cards/card";
import ErrorModal from "./UI/ErrorModal/ErrorModal";

function CourseGoals({ addedcourse }) {
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const userNameRef = useRef();
  const AgeRef = useRef();
  const [valid, setValid] = useState(true);
  const [error, SetError] = useState();

  // const usernameHandler = (event) => {
  //   if (event.target.value.length > 0) {
  //     setValid(true);
  //   }
  //   setUsername(event.target.value);
  // };
  // const ageHandler = (event) => {
  //   if (event.target.value.length > 0) {
  //     setValid(true);
  //   }
  //   setAge(event.target.value);
  // };
  const sumitHandler = (event) => {
    event.preventDefault();

    const username = userNameRef.current.value;
    const age = AgeRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setValid(false);
      SetError({
        title: "AN ERROR OCCURRED",
        message:
          "no input value found please try and add an input so we can save your data",
      });
      return;
    }

    if (+age < 1) {
      setValid(false);
      SetError({
        title: "AN ERROR OCCURRED",
        message:
          "your age has to be greater than 1 you have to exist please check and make corrections",
      });
      return;
    } else {
      const dataCollected = {
        courseNames: username,
        ages: age,
      };

      addedcourse(dataCollected);
      // setUsername("");
      // setAge("");

      userNameRef.current.value = "";
      AgeRef.current.value = "";
    }
  };

  const errorHandler = () => {
    SetError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.courseGoals}>
        <div className={classes["courseGoals__content"]}>
          <form onSubmit={sumitHandler}>
            <div className={classes.courseinputs}>
              <div
                className={`${classes["courseinputs__controls"]} ${
                  !valid && classes.invalid
                }`}
              >
                <label htmlFor="labelname">coursename</label>
                <input
                  // value={username}
                  // onChange={usernameHandler}
                  id="coursename"
                  type="text"
                  ref={userNameRef}
                />
              </div>
              <div
                className={`${classes["courseinputs__controls"]} ${
                  !valid && classes.invalid
                }`}
              >
                <label htmlFor="age">Age(years)</label>
                <input
                  // value={age}
                  // onChange={ageHandler}
                  type="number"
                  id="age"
                  ref={AgeRef}
                />
              </div>
            </div>

            <Button className={classes.button} enteredType="submit">
              add user
            </Button>
          </form>
        </div>
      </Card>
    </Fragment>
  );
}

export default CourseGoals;
