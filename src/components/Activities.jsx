import React from 'react'
import Search from './Search'
import {useEffect, useState} from "react";
import {fetchActivities} from "../api"




export default function Activities(props) {

    const {
        setSearchWord,
        searchWord,
        setDefaultActivities,
defaultActivities

      } = props;

    useEffect(async () => {
        const activity = await fetchActivities();
        setDefaultActivities(activity);
        
      }, []);
    

    return (
<<<<<<< HEAD
        <div>
            <Search
            setSearchWord={setSearchWord}
            searchWord={searchWord}
            />

            <div>
                <h1>Activities</h1>
                <div className="activityList">
                    <h3>Activity Name:</h3>
                    <p>Goal:</p>
                    <p>Creator:</p>
                </div>


            </div>
=======
        <div className="content">
            {defaultActivities.map((activity, indx) => {
  
        const { name, description } =
          activity;

          
        
              return(
                <div className="activity">
                <h1>{activity.name}</h1>
              <p>{activity.description}</p>
              </div>
              )
            })}
              
            
>>>>>>> 208cfbd490d8d9b1d50ec567fa4caf61572654a4
            
        </div>
    )
}
