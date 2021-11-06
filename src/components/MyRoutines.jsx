import React, { useEffect, useState } from "react";
import { fetchMe } from "../api";
import { getToken, getUserName, getRoutineId } from "../auth";

export default function MyRoutines({setIsLoggedIn}) {

  const [personalData, setPersonalData] = useState();

  useEffect(async () => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
    const myData = fetchMe();
setPersonalData(myData);
  }, []);
  return ( 
  <div>

  </div>
  )
}
