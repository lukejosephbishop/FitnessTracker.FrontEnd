import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Home,
  Navbar,
  Login,
  Activities,
  NewActivity,
  NewRoutine,
  MyRoutines,
  Register,
  Routines,
  EditMyRoutine,
  
} from "./components";
import EditRoutineActivity from "./components/EditRoutineActivity";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [routineId, setRoutineId] = useState("");
  const [routineActivityId, setRoutineActivityId] = useState("");
  const [defaultRoutines, setDefaultRoutines] = useState([]);

  const [defaultActivities, setDefaultActivities] = useState([]);

  const [isPublic, setIsPublic] = useState(false);
  return (
    <div id="App">
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/login">
          <Login
            userName={userName}
            setUserName={setUserName}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        </Route>

        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/routines/:routineId">
          <EditMyRoutine
            setRoutineId={setRoutineId}
            routineId={routineId}
            setIsLoggedIn={setIsLoggedIn}
            isPublic={isPublic}
            setIsPublic={setIsPublic}
            defaultActivities={defaultActivities}
            setDefaultActivities={setDefaultActivities}
          />
        </Route>
        <Route path="/routine_activity/:routineActivityId">
          <EditRoutineActivity routineActivityId={routineActivityId} setIsLoggedIn={setIsLoggedIn} setDefaultRoutines={setDefaultRoutines} defaultRoutines={defaultRoutines} />
        </Route>
        <Route path="/routines">
          <Routines
            isPublic={isPublic}
            setIsPublic={setIsPublic}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            userName={userName}
            defaultRoutines={defaultRoutines}
            setDefaultRoutines={setDefaultRoutines}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setSearchWord={setSearchWord}
            searchWord={searchWord}
            defaultActivities={defaultActivities}
            setDefaultActivities={setDefaultActivities}
          />
        </Route>
        <Route path="/myroutines">
          <MyRoutines
            setIsLoggedIn={setIsLoggedIn}
            setRoutineId={setRoutineId}
            routineId={routineId}
            setRoutineActivityId={setRoutineActivityId}
            routineActivityId={routineActivityId}
          />
        </Route>
        <Route path="/newroutine">
          <NewRoutine
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
            isPublic={isPublic}
            setIsPublic={setIsPublic}
          />
        </Route>
        <Route path="/activities">
          <Activities
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            defaultActivities={defaultActivities}
            setDefaultActivities={setDefaultActivities}
          />
        </Route>
        <Route path="/newactivity">
          <NewActivity
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
            defaultActivities={defaultActivities}
            setIsPublic={setIsPublic}
          />
        </Route>
        <Route path="/">
          {" "}
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
