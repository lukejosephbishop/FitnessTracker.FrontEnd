// import axios from 'axios';
import axios from "axios";
import { storeToken, getToken, clearCurrentUser, getUserName, getRoutineId } from "../auth";

export const BASE = "https://fitnesstrac-kr.herokuapp.com";



export async function registerUser(username, password) {
  try {
    const {data} = await axios
      .post(`${BASE}/api/users/register`, {
        username,
        password,
      })
      
    return data;
  } catch (error) {
    throw error;
  }
}

// LOGIN USER

export async function loginUser(username, password) {
  try {
    const response = await axios
      .post(`${BASE}/api/users/login`, {
        username,
        password,
      })
      
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
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
})

const result = await response.json();
console.log(result)
return result
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
    const {data} = await axios.get(`${BASE}/api/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data)
    return data
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
  body: JSON.stringify(
   {
    name: name,
    description: description,}
  )
}).then(response => response.json())
  .then(result => {
    console.log(result)
    
    alert(`${result.message}`)
  });
return data
  } catch (error){
console.log(error)
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
    }).then(response => response.json())
    .then(result => {
      return result;
    })
  return data
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
  body: JSON.stringify(
   {
    name: name,
    goal: goal,
    isPublic: isPublic,}
  )
}).then(response => response.json())
  .then(result => {
    return result;
  })
return data
  } catch (error) {
    console.log(error);
  }
}

// EDIT ROUTINE

export async function editRoutine(name, goal, isPublic, routineId) {
  const token = getToken();
  const id = getRoutineId();
  console.log(id)
  try {
    const { data } = await axios.patch(
      `${BASE}/routines/${id}`,
      {
        name,
        goal,
        isPublic,
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data)
    return data
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
      })
    const result = await response.json();
    
    return result.data
  } catch (error) {
    console.log(error);
  }
}

// ADD ACTIVITY TO ROUTINE

export async function createNewRoutineActivity(
  activityId,
  count,
  duration,
  routineId
) {
  try {
    const response = await fetch(
      `${BASE}/api/routines/${routineId}/activities`,
      {
        method: "POST",
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );
    const result = await response.json();
    return result;
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