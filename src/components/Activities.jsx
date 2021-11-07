import React from "react";
import { useEffect, useState } from "react";
import { fetchActivities } from "../api";
import { getToken } from "../auth";

export default function Activities(props) {
  const { setSearchWord, searchWord, setDefaultActivities, defaultActivities, isLoggedIn, setIsLoggedIn } =
    props;

  useEffect(async () => {
    const activity = await fetchActivities();
    console.log(activity);
    setDefaultActivities(activity);
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn)
  }, []);

  return (
    <div className="activitiesImg">
        {isLoggedIn === true ?
      <button
        onClick={(event) => {
          event.preventDefault();
          window.location.href = "/newactivity";
        }}
      >
        {" "}
        Create Activity
      </button>: null}
      {defaultActivities.map((activity, indx) => {
        return (
          <div className="activity" key={`activity-${indx}`}>
            <h1>{activity.name}</h1>
            <p>{activity.description}</p>
          </div>
        );
      })}
    </div>
  );
}
