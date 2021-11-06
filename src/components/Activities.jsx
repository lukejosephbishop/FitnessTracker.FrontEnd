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
              
            
            
        </div>
    )
}
