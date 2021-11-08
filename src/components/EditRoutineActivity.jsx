import React, { useState, useEffect } from "react";
import { getToken } from "../auth";
import { fetchRoutines, updateRoutineActivity } from "../api";
import { useHistory } from "react-router";
export default function EditRoutineActivity(props) {
  const { setIsLoggedIn, setDefaultRoutines, routineActivityId } = props;
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [personaldata, setPersonal] = useState([]);

  const history = useHistory();

  useEffect(async () => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
    const routines = await fetchRoutines();
    setDefaultRoutines(routines);
  }, []);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          await updateRoutineActivity(count, duration, routineActivityId);

          alert("Saved Changes To Routine Activity!");
          history.push("/myroutines");
        } catch (error) {}
      }}
    >
      <div className="activity">
        <fieldset>
          <label>New Count: </label>
          <input
            type="number"
            placeholder="number-of-repetitions"
            onChange={(event) => setCount(event.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label>New Duration: </label>
          <input
            type="number"
            placeholder="number-of-minutes"
            onChange={(event) => setDuration(event.target.value)}
          ></input>
        </fieldset>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
