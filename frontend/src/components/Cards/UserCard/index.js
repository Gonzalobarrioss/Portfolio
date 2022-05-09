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
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'

function UserCard() {
    return (
        <CardContainer>
            <Card>
                <ImgBx>
                    <img src={UserPerfil} alt=''/>
                </ImgBx>
                <CardContent>
                    <ContentBx>
                        <CardH3>Gonzalo Barrios <br /><span>PRO Web Designer</span></CardH3>
                    </ContentBx>
                    <CardList>
                        <CardItem>
                            <SocialMediaItem href="#"><FaFacebookF /></SocialMediaItem>
                        </CardItem>
                        <CardItem>
                            <SocialMediaItem href="#"><FaTwitter /></SocialMediaItem>
                        </CardItem>
                        <CardItem>
                            <SocialMediaItem href="#"><FaInstagram /></SocialMediaItem>
                        </CardItem>
                    </CardList>    
                </CardContent>
            </Card>
        </CardContainer>
    )
}

export default UserCard