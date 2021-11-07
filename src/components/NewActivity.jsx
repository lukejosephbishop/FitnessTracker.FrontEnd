import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import { getToken } from '../auth';
import { createNewActivity } from "../api";

export default function NewActivity(props) {
    const {setIsLoggedIn, isPublic, setIsPublic, defaultActivities } = props

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const history = useHistory();
    

    useEffect(() => {
        const TOKEN = getToken();
        if (TOKEN) {
          setIsLoggedIn(true);
        }
      }, []);

      function activityExists(name){
      const activityName = defaultActivities.forEach((activity)=>{

        if (activity.name = name){
            alert('Activity already created!')
        } else{
            alert("New Activity Made!");
            history.push("/activities");
        }
      })
    }

    return (
        <form
          className="activity"
          onSubmit={async (event) => {
            event.preventDefault();
        
            try {
              const results = await createNewActivity(
                name,
                description
                
              );
    
              setName("");
              setDescription("");
              activityExists(name)
              history.push("/activities");
              
            } catch (res) {
                setError(res.error)
                
            } 
          }}
        >
          <h1> Create New Activity</h1>
          <div>
            
          </div>
    
          <div >
            <label htmlFor="Name">Activity Name</label>
            <input
              type="text"
              name="workout name"
              placeholder="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            ></input>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              required
            ></input>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
    );
}
