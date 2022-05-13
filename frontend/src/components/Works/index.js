import React from 'react'
import Tilt from 'react-vanilla-tilt'
import BankVideo from '../../videos/video.mp4'
import { 
    WorksContainer,
    WorksTitle,
    WorksWrapper,
    WorksCard,
    WorksContent,
    WorksH2,
    WorksH3,
    WorksP,
    ImgBx,
    VideoBx
} from './WorksElements'

import ImgRickMorty from '../../images/rickmorty.jpg'


const Works = () => {



  return (
    <WorksContainer id='works'>
        <WorksTitle>Works</WorksTitle>
        <WorksWrapper>
            <Tilt style={{position:"relative", width: "100%", height: "100%"}} options={{max: 40, speed: 400, glare: true, "max-glare": 1}}>
                <WorksCard>  
                
                    <ImgBx>
                        <img src={ImgRickMorty} alt='Rick&Morty' />
                    </ImgBx>
                    <WorksContent>
                        <WorksH3>Rick & Morty</WorksH3>
                        <WorksP>React Project whit Public API</WorksP>
                        <a href='https://gonzalobarrioss.github.io/rick-morty' target='_blank' rel='noreferrer'>Ver proyecto</a>
                    </WorksContent>
                </WorksCard>
            </Tilt>
            <Tilt style={{position:"relative", width: "100%", height: "100%"}} options={{max: 40, speed: 400, glare: true, "max-glare": 1}}>
            <WorksCard>
                <VideoBx autoPlay loop src={BankVideo} muted type='video/mp4' style={{width:'100%', height: '100%'}}/>
                <WorksContent>
                    <WorksH3>Bank Page</WorksH3>
                    <WorksP>React 4 sections page template</WorksP>
                    <a href='https://gonzalobarrioss.github.io/aboutme' target='_blank' rel='noreferrer'>Ver proyecto</a>
                </WorksContent>
            </WorksCard>
            </Tilt>
            <Tilt style={{position:"relative", width: "100%", height: "100%"}} options={{max: 40, speed: 400, glare: true, "max-glare": 1}}>
            <WorksCard>
                <ImgBx />
                <WorksContent>
                    <WorksH3>Proximamente</WorksH3>
                    <WorksP>Aplicacion de tareas en PlayStore</WorksP>
                    <a href='#'>Read More</a>
                </WorksContent>
            </WorksCard>
            </Tilt>
        </WorksWrapper>
      
    </WorksContainer>
  )
}

export default Works