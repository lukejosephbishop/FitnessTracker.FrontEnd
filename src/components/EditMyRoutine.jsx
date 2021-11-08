import React, { useEffect, useState } from "react";
import {
  fetchRoutines,
  editRoutine,
  fetchActivities,
  createNewRoutineActivity,
} from "../api";
import { useHistory } from "react-router";
import {
  getToken,
  storeRoutineId,
  clearRoutineId,
} from "../auth";

export default function EditMyRoutine(props) {
  const {
    routineId,
    defaultActivities,
    setDefaultActivities,
    setIsLoggedIn,
    isPublic,
  } = props;

  const [editName, setEditName] = useState("");
  const [editGoal, setEditGoal] = useState("");
  const [editIsPublic, setEditIsPublic] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [activityId, setActivityId] = useState("");
  const [myToken, setMyToken] = useState("");
  const [personaldata, setPersonal] = useState([]);

  const history = useHistory();
  useEffect(async () => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
      setMyToken(TOKEN);
    }
    const activities = await fetchActivities();
    setDefaultActivities(activities);
    const Info = await fetchRoutines();

    setPersonal(Info);
    setMyToken(TOKEN);
  }, []);

  const routine = personaldata.filter((elem) => elem.id === routineId);
  console.log(routine);

  return (
    <>
      <div className="routine">
        <h1> Edit Routine</h1>
        {routine.map((elem) => {
          const { id, creatorId, creatorName, name, goal, activities } = elem;
          storeRoutineId(id);
          return (
            <div key={`routine-${routineId}`}>
              <div>
                <h1>{!editName ? name : editName}</h1>
              </div>
              <div>
                <p>{!editGoal ? goal : editGoal}</p>
                <p>{!editIsPublic ? isPublic : editIsPublic}</p>
              </div>
            </div>
          );
        })}

        <form
          className="login-form"
          onSubmit={async (event) => {
            event.preventDefault();

            try {
              const results = await editRoutine(editName, editGoal);
              console.log(activityId);
              await createNewRoutineActivity(activityId, count, duration);
              setEditName("");
              setEditGoal("");
              setEditIsPublic("");

              alert("Saved Changes To Routine!");
              history.push("/myroutines");
            } catch (error) {
              console.log(error);
            } finally {
              clearRoutineId();
            }
          }}
        >
          <div className="login-container">
            <label className="label" htmlFor={editName}>
              New Name
            </label>
            <input
              type="text"
              name={editName}
              placeholder="name"
              value={editName}
              onChange={(event) => {
                setEditName(event.target.value);
              }}
              required
            ></input>
            <label htmlFor={editGoal}>New Goal</label>
            <input
              type="text"
              name={editGoal}
              placeholder="goal"
              value={editGoal}
              onChange={(event) => {
                setEditGoal(event.target.value);
              }}
              required
            ></input>

            <div>
              <h3>Add Activity To Routine</h3>

              <select onChange={(event) => setActivityId(event.target.value)}>
                {defaultActivities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.name}
                  </option>
                ))}
              </select>
              <fieldset>
                <label>Count: </label>
                <input
                  type="number"
                  placeholder="number-of-repetitions"
                  onChange={(event) => setCount(event.target.value)}
                ></input>
              </fieldset>
              <fieldset>
                <label>Duration: </label>
                <input
                  type="number"
                  placeholder="number-of-minutes"
                  onChange={(event) => setDuration(event.target.value)}
                ></input>
              </fieldset>
            </div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
