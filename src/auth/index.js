
export function storeToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
}

export function getToken(){
    const myToken = JSON.parse(localStorage.getItem('token'))
    return myToken;
}

export function clearCurrentUser(){
    localStorage.removeItem('token');
}

/*username*/

export function storeUserName(username) {
    localStorage.setItem('username', JSON.stringify(username));
}

export function getUserName(){
    const myUserName = JSON.parse(localStorage.getItem('username'))
    return myUserName;
}

export function clearUserName(){
    localStorage.removeItem('username');
}

/*RoutineId*/

export function storeRoutineId(routineId) {
    localStorage.setItem('routineId', JSON.stringify(routineId));
}

export function getRoutineId(){
    const routineId = JSON.parse(localStorage.getItem('routineId'))
    return routineId;
}

export function clearRoutineId(){
    localStorage.removeItem('routineId');
}