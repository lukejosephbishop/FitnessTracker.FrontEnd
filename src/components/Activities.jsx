import React from 'react'
import Search from './Search'
import {useEffect, useState} from "react";
import {fetchActivities} from "../api"




export default function Actities(props) {

    const {
        setSearchWord,
        searchWord,
        setDefaultActivities,


      } = props;

    useEffect(async () => {
        const routines = await fetchActivities();
        // setDefaultActivities(activity);
        console.log(fetchActivities())
      }, []);
    

    return (
        <div>
            <Search
            setSearchWord={setSearchWord}
            searchWord={searchWord}
            />
            <div>
                <h1>Activities</h1>
                
            </div>
            
        </div>
    )
}
