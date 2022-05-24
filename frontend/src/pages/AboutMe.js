import React from 'react';
import PDF from '../assets/GBCV.pdf'

const About = () =>  {

    return(
       
        <iframe style={{height: '100vh', width: '100%', overflow: 'hidden', overflowX: 'hidden'}} src={PDF} title='pdf' />
       
    )    
};

export default About