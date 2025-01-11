import React from 'react'
import { useState } from "react"

import './App.css'

function RealTime(){

  setInterval(getTime,1000)


  let now = new Date().toLocaleTimeString();
  const [time , setTime ]= useState(now)

function getTime(){

 const newTime = new Date().toLocaleTimeString();
 setTime(newTime)


  }

  return(
    
      <div>
         <div className='parent'>

           <h1 className='time'>{time}</h1>
          </div>
        
        
      </div>

  )

}

export default RealTime