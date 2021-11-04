import React from "react";

import { Redirect, Link, useHistory } from "react-router-dom";
import { clearCurrentUser, clearUserName, getToken} from "../auth";

export default function Navbar(props) {
    const { isLoggedIn, setIsLoggedIn } = props
  const history = useHistory();


  return (
    <nav className="NavbarMenu">
      <div>
        <Link to="/home">Home</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/activities">Activities</Link>
        {isLoggedIn ? (
          <Link className="nav-links" to="/myroutines">
            My Routines
          </Link>
        ) : null}
        {isLoggedIn ? (
          <Link
            className="nav-links"
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
            {isLoggedIn ? "LogOut" : "LogIn"}
          </Link>
        ) : (
          <Link className="nav-links" to="/login">
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
}
