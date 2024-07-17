import React from 'react'
import Introducing from '../../Introducing/Introducing'
import './FirstSectionHome.sass'
import './Section.sass'



export default function FirstSectionHome(){
    return(
        <>
            <div className="container-section home">
            
            <div className="background"></div>
                
            <Introducing></Introducing>

            </div>
        </>
    )
}