import React, { useState, useEffect } from "react";

import { createNewRoutine } from "../api";
import { getToken } from "../auth";
import { useHistory } from "react-router-dom";

export default function NewRoutine(props) {
  const { setIsLoggedIn, isPublic, setIsPublic } = props;

  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const history = useHistory();

  useEffect(() => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <form
      className="routine"
      onSubmit={async (event) => {
        event.preventDefault();

        try {
          const results = await createNewRoutine(name, goal, isPublic);

          setName("");
          setGoal("");
          setIsPublic(false);

          history.push("/myroutines");
          alert("New Workout Made!");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <h1> Create New Routine</h1>
      <div></div>

      <div>
        <label htmlFor="Name">Workout Name</label>
        <input
          type="text"
          name="workout name"
          placeholder="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        ></input>
        <label htmlFor="goal">Goal</label>
        <input
          type="text"
          name="goal"
          placeholder="goal"
          value={goal}
          onChange={(event) => {
            setGoal(event.target.value);
          }}
          required
        ></input>

        <label className="checkbox">
          Make Public?
          <input
            type="checkbox"
            id="myCheck"
            name="isPublic"
            value={true}
            onChange={(event) => {
              setIsPublic(true);
            }}
          />{" "}
          Yes
          <input
            type="checkbox"
            id="myCheck"
            name="isPublic"
            value={false}
            onChange={(event) => {
              setIsPublic(false);
            }}
          />{" "}
          No
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
