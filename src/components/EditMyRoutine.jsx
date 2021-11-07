import React, { useEffect, useState } from 'react'
import { fetchRoutines, editRoutine } from '../api';
import { useHistory } from 'react-router';
import { getToken, storeRoutineId } from '../auth';

export default function EditMyRoutine(props) {
    const {
        routineId,
        
        setIsLoggedIn,
        
        isPublic,
        setIsPublic,
      } = props;

    
      const [editName, setEditName] = useState("");
      const [editGoal, setEditGoal] = useState("");
      const [editIsPublic, setEditIsPublic] = useState("");
      
      const [myToken, setMyToken] = useState("");
      const [personaldata, setPersonal] = useState([]);
    
      const history = useHistory();
      useEffect(async () => {
        const TOKEN = getToken();
        if (TOKEN) {
          setIsLoggedIn(true);
          setMyToken(TOKEN);
        }
    
        const Info = await fetchRoutines();
    
        setPersonal(Info);
        setMyToken(TOKEN)
      }, []);
    
      const routine = personaldata.filter((elem) => elem.id === routineId);
      console.log(routine)
      
    
      return (
        <>
          <div className="routine">
            <h1 > Edit Routine</h1>
            {routine.map((elem) => {
              const {
                id, creatorId, creatorName, name, goal, activities
              } = elem;
    storeRoutineId(id);
              return (
                <div  key={`routine-${routineId}`}>
                  <div>
                    <h1>{!editName ? name : editName}</h1>
                  </div>
                  <div>
                    <p>{!editGoal ? goal : editGoal}</p>
                    <p>{!editIsPublic ? isPublic : editIsPublic}</p>
                  </div>
                </div>
              );
            })}
    
            <form
              className="login-form"
              onSubmit={async (event) => {
                event.preventDefault();
                console.log(editName, editGoal, editIsPublic, "!!!!!!")

                try {
                  const results = await editRoutine(
                   editName, editGoal, editIsPublic
                  );
    
                  setEditName("");
                  setEditGoal("");
                  setEditIsPublic("");
                
                  
                  alert("Saved Changes To Routine!");
                  history.push("/myroutines");
                  return results
                } catch (error) {
                  console.log(error);
                } finally {
                }
              }}
            >
              <div className="login-container">
                <label className="label" htmlFor={editName}>
                  New Name
                </label>
                <input
                  type="text"
                  name={editName}
                  placeholder="name"
                  value={editName}
                  onChange={(event) => {
                    setEditName(event.target.value);
                  }}
                  required
                ></input>
                <label htmlFor={editGoal}>New Goal</label>
                <input
                  type="text"
                  name={editGoal}
                  placeholder="goal"
                  value={editGoal}
                  onChange={(event) => {
                    setEditGoal(event.target.value);
                  }}
                  required
                ></input>
                
                <label className="checkbox">
                  Is Public?
                  <input
                    type="checkbox"
                    id="myCheck"
                    name="IsPublic"
                    value={true}
                    onChange={(event) => {
                      setIsPublic(true);
                    }}
                  />{" "}
                  Yes
                  <input
                    type="checkbox"
                    id="myCheck"
                    name="IsPublic"
                    value={false}
                    onChange={(event) => {
                      setIsPublic(false);
                    }}
                  />{" "}
                  No
                </label>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      );
}
