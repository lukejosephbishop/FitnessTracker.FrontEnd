import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { registerUser } from "../api";
import { storeToken} from "../auth";

export default function Register() {
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
    return (
        <form
          className="login-form"
          className="login-form"
          onSubmit={async (event) => {
            event.preventDefault();
            
    
            try {
              const results = await registerUser(userName, password);
    
              storeToken(results.token);
              
              setUserName("");
              setPassword("");
              history.push("/posts");
            } catch (error) {
              console.log(error);
            } 
          }}
        >
          <div className="container">
            <h1 className="login-title">Register</h1>
            <div className="imgcontainer">
              <i className="far fa-user fa-5x"></i>
            </div>
            <p>Please fill in this form to create an account.</p>
            <>
              <label htmlFor="email">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name=""
                id="email"
                required
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
    
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
              />
    
              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </>
    
            <button type="submit" className="registerbtn">
              Register
            </button>
          </div>
    
          <div className="container signin">
            <p>
              Already have an account? <a href="/login">Sign in</a>.
            </p>
          </div>
        </form>
      );
}
