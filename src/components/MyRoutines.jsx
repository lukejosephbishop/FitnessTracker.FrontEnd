import React, { useEffect, useState } from "react";
import { fetchMe } from "../api";
import { getToken, getUserName, getRoutineId } from "../auth";

export default function MyRoutines({ setIsLoggedIn }) {
  const [personalData, setPersonalData] = useState();

  useEffect(async () => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
    const myData = fetchMe();
    setPersonalData(myData);
  }, []);
  return (
    <div>
      {personalData.map((routines, indx) => {
        console.log(routines);
        const { id, creatorId, creatorName, isPublic, name, goal, activities } =
          routines;

        return (
          <div className="routine" key={`routine-${indx}`}>
            <div>
              <h1>{name}</h1>
              <h2>{creatorName}</h2>
            </div>
            <p>{goal}</p>
            <div>
              {" "}
              {activities.map((activity, indx) => {
                return (
                  <div className="activity">
                    {" "}
                    Activity
                    <h4>{activity.name}</h4>
                    <p>{activity.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}
