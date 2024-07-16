import React from 'react'
import './FirstSectionHome.sass'
import Introducing from '../../Introducing/Introducing'

export default function FirstSectionHome(){
    return(
        <>
            <div className="first-section">
            
            <div className="background"></div>
                
              <Introducing></Introducing>

            </div>
        </>
    )
}