import React from 'react'
import { Button } from '../Buttons/ButtonElement'
import FaBackground from '../background'
import EnergyButtonNeon from '../Buttons/EnergyButtonNeon'
import UserCard from '../Cards/UserCard'
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements'
//import img from '../../images/bussines_woman.svg'

const InfoSection = (props) => {

    const {
        lightBg,
        id,
        imgStart,
        topLine,
        lightText,
        headline,
        darkText,
        description,
        buttonLabel,
        img,
        alt,
        primary,
        dark,
        dark2
    } = props

    return (
            <InfoContainer lightBg={lightBg} id={id}>
                <TopLine>{topLine}</TopLine>
                    <InfoRow imgStart={imgStart}>
                    
                        <Column1>
                            <TextWrapper>
                                
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <EnergyButtonNeon />
                         
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <UserCard />
                        </Column2>
                    </InfoRow>
            </InfoContainer>   
  )
}

export default InfoSection