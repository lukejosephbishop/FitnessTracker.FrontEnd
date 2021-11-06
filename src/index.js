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
  EditMyActivity
} from "./components";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [routineId, setRoutineId] = useState("");

  const [defaultRoutines, setDefaultRoutines] = useState([]);

  const [defaultActivities, setDefaultActivities] = useState([]);
 
  
  const [isPublic, setIsPublic] = useState(false);
  return (
    <div id="App">
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      <Switch>
        <Route path="/login">
          <Login userName={userName} setUserName={setUserName} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
        </Route>

        <Route path="/register">
          <Register setIsLoggedIn = {setIsLoggedIn}/>
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
             setDefaultActivities={setDefaultActivities}/>
        </Route>
        <Route path="/myroutines">
          <MyRoutines setIsLoggedIn={setIsLoggedIn}
          setRoutineId={setRoutineId}
          routineId={routineId}
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
        <Route>
          <EditMyRoutine
          setRoutineId={setRoutineId}
          routineId={routineId}/>
        </Route>
          <Route path="/activities">
          <Activities 
          setIsLoggedIn={setIsLoggedIn}
          defaultActivities={defaultActivities}
          setDefaultActivities={setDefaultActivities}/> 
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
