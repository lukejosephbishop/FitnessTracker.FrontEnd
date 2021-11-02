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
  Profile,
  Register,
  Routines,
} from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [routineId, setRoutineId] = useState("");
  
  const [defaultRoutines, setDefaultRoutines] = useState([]);
 
  
  const [isPublic, setIsPublic] = useState(false);
  return (
    <div id="App">
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login userName={userName} setUserName={setUserName} />
        </Route>

        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/activities">
          <Activities />
        </Route>
        <Route path="/routines">
          <Routines isPublic={isPublic}
            setIsPublic={setIsPublic}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            setRoutineId={setRoutineId}
            routineId={routineId}
            userName={userName}
            defaultRoutines={defaultRoutines}
            setDefaultRoutines={setDefaultRoutines}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setSearchWord={setSearchWord}
            searchWord={searchWord}/>
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
