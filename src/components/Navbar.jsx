import React from "react";

import { Redirect, Link, useHistory } from "react-router-dom";
import { clearCurrentUser, clearUserName, getToken} from "../auth";

export default function Navbar(props) {
    const { isLoggedIn, setIsLoggedIn } = props
  const history = useHistory();


  return (
    <nav className="navbar">
      <div>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/routines">Routines</Link>
        <Link className="links" to="/activities">Activities</Link>
        {isLoggedIn ? (
          <Link className="links" to="/myroutines">
            MyRoutines
          </Link>
        ) : null}
        {isLoggedIn ? (
          <Link
            className="links"
            to="/login"
            onClick={(event) => {
              const course = confirm("Are you sure you want to log out?");

              if (course === true) {
                event.preventDefault;
                clearCurrentUser();
                clearUserName();
                setIsLoggedIn(false);
              }
            }}
          >
            {isLoggedIn ? "LogOut" : "LogIn/SignUp"}
          </Link>
        ) : (
          <Link className="links" to="/login">
            Login/SignUp
          </Link>
        )}
      </div>
    </nav>
  );
}
