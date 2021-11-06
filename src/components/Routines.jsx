import React, { useEffect } from "react";
import Search from "./Search";

import { fetchActivities, fetchRoutines } from "../api";
import { Link } from "react-router-dom";
import { storeRoutineId, getToken } from "../auth";

export default function Routines(props) {
  const {
    defaultRoutines,
    setDefaultRoutines,
    defaultActivities,
    setDefaultActivities,
    isLoggedIn,
    userName,
setIsLoggedIn,
    setSearchWord,
    searchWord,
  } = props;

  useEffect(async () => {
    const routines = await fetchRoutines();
    setDefaultRoutines(routines);
    const allActivities = await fetchActivities();
    setDefaultActivities(allActivities);
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
  }, []);


  return (
    <div className="content">
      <Search
        setSearchWord={setSearchWord}
        searchWord={searchWord}
        defaultRoutines={defaultRoutines}
      />
      {isLoggedIn === true ? (
        <div className="routine-actionbuttons">
          <button
  
            onClick={(event) => {
              event.preventDefault();
              window.location.href = "/newroutine";
            }}
          >
            {" "}
            Create Routine
          </button>
          <button
            className="edit-myRoutiness"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = "/myroutines";
            }}
          >
            {" "}
            Edit my Routine
          </button>
        </div>
      ) : null}
      {defaultRoutines.map((routines, indx) => {
       console.log(routines)
        const { id, creatorId, creatorName, isPublic, name, goal, activities } =
          routines;

          const activityName = activities.name;
          const activityDescription = activities.description;
        
        return (
          <div className="routine" key={`routine-${indx}`}>
            <div> 
              <h1>{name}</h1>
              <h2>{creatorName}</h2>
            </div>
            <p>{goal}</p>
            <div> {activities.map((activity, indx)=>{
              return(
                <div className="activity"> Activity
                <h4>{activity.name}</h4>
              <p>{activity.description}</p>
              </div>
              )
            })}
              </div>
            
            {(userName != creatorName) & (isLoggedIn === true) ? (
              <div>
                <Link to={`/routines/${creatorName}`}>
                  <button
                    className="submit-button"
                    onClick={(event) => {
                      storeRoutineId(id);
                    }}
                  >
                    Send Message
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
