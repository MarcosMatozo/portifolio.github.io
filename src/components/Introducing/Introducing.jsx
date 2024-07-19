import React  from 'react';
import './Introducing.sass'


export default function Introducing(){
    return(
        <>  
            <div className="totalCentered Introducing">
                <div className="top">
                    <img className=' animate__animated  animate__tada' src='images/marcos-rounded-purple.png' alt="" />
                </div>
                <div className="right">
                    <h1>Marcos Matozo</h1>
                    <h2>Desenvolvedor especialista em Front-end</h2>
                    <div className="contact">
                        <span className="say-with-me">
                            Fale comigo! <i><div class="arrow"></div></i>
                        </span>
                        <p>
                            <i className='whats'>
                            </i>
                            <span>
                                <a target='_blank' href="https://wa.me/5511934060616?text=Ol%C3%A1%2C%20Marcos..." rel="noreferrer">11 934060616</a>
                            </span>
                        </p>
                        <p>
                            <i className='mail'>
                            </i>
                            <a target='_blank' href="mailto:marcoshenriquesp@hotmail.com" rel="noreferrer">marcoshenriquesp@hotmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}