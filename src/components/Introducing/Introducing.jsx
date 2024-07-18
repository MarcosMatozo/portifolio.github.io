import React  from 'react';
import './Introducing.sass'


export default function Introducing(){
    return(
        <>  
            <div className="totalCentered Introducing">
                <div className="left">
                    <img className=' animate__animated  animate__tada' src='images/marcos-rounded-purple.png' alt="" />
                </div>
                <div className="right">
                    <h1>Marcos Matozo</h1>
                    <h2>Desenvolvedor especialista em Front-end</h2>
                </div>
            </div>
        </>
    )
}