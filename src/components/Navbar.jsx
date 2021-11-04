import React from 'react'

import { Redirect, Link, useHistory } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/routines">Routines</Link>
            <Link to="/myroutines">My Routines</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/login">Login</Link>
            
        </div>
    )
}
