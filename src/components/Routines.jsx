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
    <div className="imgContainer">
    <div className="content">
      <div className="searchbar">
      <Search
        setSearchWord={setSearchWord}
        searchWord={searchWord}
        defaultRoutines={defaultRoutines}
      />
      </div>
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
          
          <Link to={`/myroutines`}>
                <button>
                  Edit My Routines
                </button>
              </Link>
        </div>
      ) : null}
      {defaultRoutines.map((routines, indx) => {
       console.log(routines)
        const { id, creatorId, creatorName, isPublic, name, goal, activities } =
          routines;

        
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
          </div>
        );
      })}
    </div>
    </div>
  );
}
