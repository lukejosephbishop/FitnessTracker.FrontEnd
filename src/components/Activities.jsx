import React from "react";
import { useEffect, useState } from "react";
import { fetchActivities } from "../api";

export default function Activities(props) {
  const { setSearchWord, searchWord, setDefaultActivities, defaultActivities } =
    props;

  useEffect(async () => {
    const activity = await fetchActivities();
    console.log(activity);
    setDefaultActivities(activity);
  }, []);

  return (
    <div className="activitiesImg">
    <div>
      {defaultActivities.map((activity, indx) => {
        return (
          <div className="activity">
            <h1>{activity.name}</h1>
            <p>{activity.description}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}
