import React from 'react'

import { Redirect, Link, useHistory } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/user">User</Link>
            <Link to="/login">Login</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/routines">Routines</Link>
        </div>
    )
}
