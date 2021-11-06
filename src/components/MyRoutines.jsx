import React, { useEffect, useState } from "react";
import { deleteRoutine, fetchMe, fetchMyRoutines } from "../api";
import { getToken, getUserName, getRoutineId } from "../auth";
import { useHistory, Link } from "react-router-dom";

export default function MyRoutines({ setIsLoggedIn, setRoutineId, routineId }) {
  const [personalData, setPersonalData] = useState([]);

  const userName = getUserName();

  useEffect(async () => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
    const myData = await fetchMyRoutines(userName);
    console.log(myData)
    setPersonalData(myData);
    
  }, []);

  

  return (
    <div>
      {!personalData? null : personalData.map((routines, indx) => {
        
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
            <div>
              <Link to={`/routine/${id}`}>
                <button
                  
                  onClick={(event) => {
                    // setRoutineId("");
                    setRoutineId(id);
                  }}
                >
                  Edit
                </button>
              </Link>

              <button
                
                onClick={async (event) => {
                  const course = confirm(
                    "Are you sure you want to delete this routine?"
                  );

                  if (course === true) {
                    event.preventDefault;
                    try {
                      const response = await deleteRoutine(id);
                      console.log(response, "line 63")
                      // return response;
                    } catch (error) {
                      console.log(error);
                    } finally {
                      const Info = await fetchMyRoutines(userName);
                      setPersonalData(Info);
                      // window.location.reload();
                    }
                  }
                }}
              >
                Delete
              </button>
            </div>
              {" "}
              {activities.map((activity, indx) => {
                return (
                  <div className="activity">
                    {" "}
                    Activity
                    <h4>{activity.name}</h4>
                    <p>{activity.description}</p>
                    <div>
                    </div>
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
