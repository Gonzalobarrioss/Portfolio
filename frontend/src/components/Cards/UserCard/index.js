import React from 'react'
import { 
    CardContainer, 
    Card, 
    ImgBx, 
    CardContent, 
    ContentBx, 
    CardH3, 
    CardList, 
    CardItem, 
    SocialMediaItem 
} from './UserCardElements'
import UserImg from '../../../images/img1.jpg'
import UserPerfil from '../../../images/perfil.jfif'
import Perfil from '../../../assets/images/perfil.jfif'
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTelegram,FaTwitter} from 'react-icons/fa'

function UserCard() {
    return (
        <CardContainer>
            <Card>
                <ImgBx>
                    <img src={Perfil} alt=''/>
                </ImgBx>
                <CardContent>
                    <ContentBx>
                        <CardH3>Gonzalo Barrios <br /><span>SSR Web Developer</span></CardH3>
                    </ContentBx>
                    <CardList>
                        <CardItem>
                            <SocialMediaItem href="https://instagram.com/ponja__"><FaInstagram /></SocialMediaItem>
                        </CardItem>
                        <CardItem>
                            <SocialMediaItem href="https://www.linkedin.com/in/gonzaloezequielbarrios/"><FaLinkedinIn /></SocialMediaItem>
                        </CardItem>
                        <CardItem>
                            <SocialMediaItem href="https://t.me/GonzaloBarrios"><FaTelegram /></SocialMediaItem>
                        </CardItem>
                    </CardList>    
                </CardContent>
            </Card>
        </CardContainer>
    )
}

export default UserCard