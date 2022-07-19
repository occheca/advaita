import './Phrases-container.css';

import React, { useState } from 'react';

const arrPhrases = [
    "Jose Luna es irrelevante.", 
    "No deberías interesarte por él.",
    "Jose Luna es un ser voluble y lunático.", 
    "Él no tiene ninguna de las respuestas que buscas.", 
    "No es un iluminado.", 
    "Jose Luna es un ser humano que a duras penas es capaz de lidiar con los problemas cotidianos de su vida.", 
    "Él es una persona que se toma la vida demasiado en serio.",
    "A Jose Luna le cuesta aceptar.", 
    "Jose Luna es incapaz de escribir Advaita y Mapas Estructurales Innatos.", 
    "Él se pierde en la obviedad y se olvida de dejarse traspasar por la vida, en alma pero también en cuerpo.", 
    "Jose Luna vive en mundos demasiados alejados a este.", 
    "Él no sabe nada más de lo que tú sabes.", 
    "A Jose Luna le gustaría pensar que es un visionario.", 
    "Jose Luna es todo esto y nada (es la última mierda pegada al tacón de tu calzado)", 
    "Él solo quiere encontrar la estabilidad en la inestabilidad.", 
    "Jose Luna se marchará agradecido y en paz.", 
    "Jose Luna estuvo en un túnel muy oscuro donde solo encontró una tenue luz interior."
]

/*
const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
);
*/

function Phrases(){
    //https://es.reactjs.org/docs/hooks-state.html

    const [count, setCount] = useState(0);

    let myTimeout = setTimeout(()=>setCount(count+1), 4000); 
 
    return (
        <div>
            <div className="Phrases">
                {arrPhrases[count]}
            </div>
            
            <div className="Button">
                Quiero perder más tiempo    
            </div>

            <div className="Button2">
                Llévame al MEI
            </div>
        </div>
    )

}

export default Phrases;