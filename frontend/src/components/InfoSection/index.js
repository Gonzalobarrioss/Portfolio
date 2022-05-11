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
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <EnergyButtonNeon />
                                {
                                    /*
                                        <BtnWrap>
                                            <Button to='about'
                                                $smooth={true} 
                                                duration={500}
                                                $spy={true}
                                                exact="true"
                                                offset={-80}
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                            >{buttonLabel}</Button>
                                        </BtnWrap>
                                    */
                                }
                                
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