import React, {useState, useEffect} from 'react'
import { getToken } from '../auth';
import { fetchRoutines } from '../api';
export default function EditRoutineActivity(props) {

    const {setIsLoggedIn, setDefaultRoutines, defaultRoutines, routineActivityId} = props


    const [personaldata, setPersonal] = useState([]);
    useEffect(async () => {
        
        const TOKEN = getToken();
        if (TOKEN) {
          setIsLoggedIn(true);
        }
        const routines = await fetchRoutines();
    setDefaultRoutines(routines);

      }, []);

      try {


          
      } catch (error) {
          console.log(error)
      }

      
    return (
        <form>
    <fieldset>
                <label>New Count: </label>
                <input
                  type="number"
                  placeholder="number-of-repetitions"
                  onChange={(event) => setCount(event.target.value)}
                ></input>
              </fieldset>
              <fieldset>
                <label>New Duration: </label>
                <input
                  type="number"
                  placeholder="number-of-minutes"
                  onChange={(event) => setDuration(event.target.value)}
                ></input>
              </fieldset>
              <button className="submit-button" type="submit">
              Submit
            </button>
        </form>
    )
}
