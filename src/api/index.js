// import axios from 'axios';
import { storeToken, getToken, clearCurrentUser } from "../auth";

export const BASE = 'https://fitnesstrac-kr.herokuapp.com'

// REGISTER A USER

export async function registerUser(username, password) {
  try {
    const data = await fetch(`${BASE}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        const {success, error} = result
        if (success === false) {
         
          return alert(error.message)
        }
        
        
        return result.data;
      });
    return data;
  } catch (error) {
   
    throw error;
    
  }
}

// LOGIN USER

export async function loginUser(username, password) {
  try {
    const data = await fetch(`${BASE}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result.data;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}

// GET TOKEN

// const fetchToken = () => {
// const token = JSON.parse(localStorage.getItem("token"))
// return token ? token : ''
// }

// GET "ME"

export async function fetchMe() {
  const token = getToken();
  
  try {
    const response = await fetch(`${BASE}/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

// LOG OUT

export async function logOut() {
  const token = getToken();
  return token ? localStorage.removeItem("token") : ''
}

// GET ALL ACTIVITIES

export async function fetchActivities() {
  
  try {
    const response = await fetch(`${BASE}/api/activities`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

// POST AN ACTIVITY

export async function addActivity(name, description) {
const token = getToken();
  try {
    const resonse = await fetch(`${BASE}/api/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

// UPDATE AN ACTIVITY

export async function updateActivity (name, description, id) {
  const token = getToken();

  try {
    const response = await fetch(`${BASE}/api/activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

// GET ACTIVITY BY ID

export async function getActivityById(activityId) {

  try {
    const response = await fetch(`${BASE}/api/activites/${activityId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    return result
  } catch(error) {
    console.log(error)
  }
}

// GET ALL ROUTINES

export async function fetchRoutines() {
  
  try {
    const response = await fetch(`${BASE}/api/routines`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

// CREATE NEW ROUTINE

export async function createNewRoutine(name, goal, isPublic) {
  
  try {
    const response = await fetch(`${BASE}/api/routines`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic
      })
    })
    const result = await response.json()
    return result
  } catch(error) {
    console.log(error)
  }
}

// EDIT ROUTINE

export async function editRoutine(name, goal, isPublic, routineId) {
  
  try {
    const response = await fetch(`${BASE}/api/routines/${routineId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic
      })
    })
    const result = await response.json()
    return result
  } catch(error) {
    console.log(error)
  }
}

// DELETE ROUTINE

export async function deleteRoutine(routineId) {
  const token = getToken();

  try {
    const response = await fetch(`${BASE}/api/routines/${routineId}`, {
      method: "DELETE",
      body: JSON.stringify({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    })
    const result = await response.json()
    return result
  } catch(error) {
    console.log(error)
  }
}

// ADD ACTIVITY TO ROUTINE

export async function createNewRoutineActivity(activityId, count, duration, routineId) {

  try {
    const response = await fetch(`${BASE}/api/routines/${routineId}/activities`, {
      method: "POST",
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration
      })
    })
    const result = await response.json()
    return result
  } catch(error) {
    console.log(error)
  }
}

// GET USER ROUTINES

export async function fetchMyRoutines(username) {

  try {
    const response = await fetch(`${BASE}/api/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    return result
  } catch(error) {
    console.log(error)
  }
}

















// export async function getUsers() {
//   try {
//     const { data } = await axios.get(`${ BASE }/users`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getPostsByUser(userId) {
//   try {
//     const { data } = await axios.get(`${ BASE }/users/${ userId }/posts`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getTodosByUser(userId) {
//   try {
//     const { data } = await axios.get(`${ BASE }/users/${ userId }/todos`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }