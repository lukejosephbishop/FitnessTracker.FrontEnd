import React, { useEffect } from "react";
import { getToken } from "../auth";

export default function MyRoutines({setIsLoggedIn}) {
  useEffect(async () => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
  }, []);
  return <div></div>;
}
