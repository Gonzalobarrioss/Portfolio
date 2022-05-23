import React from "react"
import PDF from '../assets/GBCV.pdf'


const About = () =>  {
    return(
        <>
           <img src={PDF} alt= 'CV'  />
               
            <PDF />
           
        </>
    )
};

export default About