// import axios from 'axios';
import axios from "axios";
import {

  getToken,
  
  getRoutineId,
} from "../auth";

export const BASE = "https://fitnesstrac-kr.herokuapp.com";

export async function registerUser(username, password) {
  try {
    const response = await axios.post(`${BASE}/api/users/register`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

// LOGIN USER

export async function loginUser(username, password) {
  try {
    const response = await axios.post(`${BASE}/api/users/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMe() {
  const token = getToken();
  // const username = getUserName();
  try {
    const response = await fetch(`${BASE}/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// LOG OUT

export async function logOut() {
  const token = getToken();
  return token ? localStorage.removeItem("token") : "";
}

// GET ALL ACTIVITIES

export async function fetchActivities() {
  try {
    const { data } = await axios.get(`${BASE}/api/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// POST AN ACTIVITY

export async function createNewActivity(name, description) {
  const TOKEN = getToken();
  try {
    const data = await fetch(`${BASE}/api/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if(result.error){
alert(`${result.error}`);
        } else {
          alert("You have created a New Activity!");
        }
       
      });
    return data;
  } catch (error) {
    alert(err.message);
  }
}

// UPDATE AN ACTIVITY

export async function updateActivity(name, description, id) {
  const token = getToken();

  try {
    const data = await fetch(`${BASE}/api/activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}

// GET ACTIVITY BY ID

export async function getActivityById(activityId) {
  try {
    const response = await fetch(`${BASE}/api/activites/${activityId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

// GET ALL ROUTINES

export async function fetchRoutines() {
  try {
    const response = await fetch(`${BASE}/api/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

// CREATE NEW ROUTINE

export async function createNewRoutine(name, goal, isPublic) {
  const TOKEN = getToken();

  try {
    const data = await fetch(`${BASE}/api/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}

// EDIT ROUTINE

export async function editRoutine(name, goal) {
  const TOKEN = getToken();
  try {
    const routineId = getRoutineId();
    const data = await axios.patch(
      `${BASE}/api/routines/${routineId}`,
      {
        name: name,
        goal: goal,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

// DELETE ROUTINE

export async function deleteRoutine(routineId) {
  const token = getToken();

  try {
    const response = await fetch(`${BASE}/api/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.log(error);
  }
}

// ADD ACTIVITY TO ROUTINE

export async function createNewRoutineActivity(activityId, count, duration) {
  const TOKEN = getToken();
  console.log(count, "count", duration, "duration", activityId, "activityId")
  try {
    const routineId = getRoutineId();
    const data = await axios.post(
      `${BASE}/api/routines/${routineId}/activities`,
      {
        activityId,
        count,
        duration,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// GET USER ROUTINES

export async function fetchMyRoutines(username) {
  try {
    const response = await fetch(`${BASE}/api/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function updateRoutineActivity(count, duration, routineActivityId) {
  const TOKEN = getToken();
  try {
  fetch(`${BASE}/api/routine_activities/${routineActivityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      count,
      duration
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
  }catch(error){
    console.log(error)
  }
}

export async function deleteRoutineActivity(routineActivityId){
  const TOKEN = getToken();
  try {
    const response = fetch(`${BASE}/api/routine_activities/${routineActivityId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    return response
  }catch (error) {
    console.log(error)
    }
}