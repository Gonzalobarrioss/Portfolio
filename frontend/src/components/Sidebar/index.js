import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons"

import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    ButtonLink,
    SideBtnWrap, 
    SidebarRoute ,
    SocialMediaWrap,
    SocialMediaLink,
    ButtonSocialMedia,
    SocialMediaContainer
} from './SidebarElements'

import { store } from '../../redux/store'
import { showChatbot } from '../../redux/actions/ChatbotAction'

const Sidebar = (props) => {

    const {isOpen, toggle} = props

    const toggleContact = () => {
        toggle()
        store.dispatch(showChatbot(true))
    }
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle} >
                    <ButtonLink>About</ButtonLink>
                </SidebarLink>
                <SidebarLink to='skills' onClick={toggle} >
                    <ButtonLink>Skills</ButtonLink>
                </SidebarLink>
                <SidebarLink to='works' onClick={toggle}>
                    <ButtonLink>Works</ButtonLink>
                </SidebarLink>
                <SidebarLink to='/' onClick={toggleContact}>
                    <ButtonLink>Contact</ButtonLink>
                </SidebarLink>
                {/*
                <SidebarLink to='signup' onClick={toggle}>
                    Sign Up
                </SidebarLink>
                */}
            </SidebarMenu>

            {/*
            <SocialMediaContainer>
                <SocialMediaWrap>
                    <SocialMediaLink to='/signin' color='#1877f2'>
                        <ButtonSocialMedia color='#1877f2'><FontAwesomeIcon icon={faFacebookF} /></ButtonSocialMedia>
                    </SocialMediaLink>
                    <SocialMediaLink to='/signin' color='#1da1f2'>
                        <ButtonSocialMedia color='#1da1f2'><FontAwesomeIcon icon={faTwitter} /></ButtonSocialMedia>
                    </SocialMediaLink>
                    <SocialMediaLink to='/signin' color='#8c0e6d'>
                        <ButtonSocialMedia color='#c32aa3'><FontAwesomeIcon icon={faInstagram} /></ButtonSocialMedia>
                    </SocialMediaLink>
                </SocialMediaWrap>
            </SocialMediaContainer>
            */}
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar