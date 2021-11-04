import React, { useEffect } from "react";
import Search from "./Search";

import { fetchRoutines } from "../api";
import { Link } from "react-router-dom";
import { storeRoutineId } from "../auth";

export default function Routines(props) {
  const {
    defaultRoutines,
    setDefaultRoutines,
    isLoggedIn,
    userName,

    setSearchWord,
    searchWord,
  } = props;

  useEffect(async () => {
    const routines = await fetchRoutines();
    setDefaultRoutines(routines);
  }, []);

  return (
    <div className="post-page">
      <Search
        setSearchWord={setSearchWord}
        searchWord={searchWord}
        defaultRoutines={defaultRoutines}
      />
      {isLoggedIn === true ? (
        <div className="routine-actionbuttons">
          <button
            className="create-routines"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = "/newpost";
            }}
          >
            {" "}
            Create Post
          </button>
          <button
            className="edit-myRoutiness"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = "/editpost";
            }}
          >
            {" "}
            Edit my Posts
          </button>
        </div>
      ) : null}
      {defaultRoutines.map((post, indx) => {
        console.log(defaultRoutines);
        const {
            id, 
            creatorId, 
            creatorName,
            isPublic, 
            name, 
            goal, 
            activity 
        } = post;


        return (
          <div key={`routine-${indx}`}>
            <div >
              <h1>{name}</h1>
              <h2>{creatorName}</h2>
            </div>
            <div >
              <p>{goal}</p>
              <p>{activity}</p>
              
            </div>
            {/* {(userName != username) & (isLoggedIn === true) ? (
              <div>
                <Link to={`/routines/${username}`}>
                  <button
                    className="submit-button"
                    onClick={(event) => {
                      storeRoutineId(_id);
                    }}
                  >
                    Send Message
                  </button>
                </Link>
              </div>
            ) : null} */}
          </div>
        );
      })}
    </div>
  );
}
