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

const Sidebar = (props) => {

    const {isOpen, toggle} = props

  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle} >
                    <ButtonLink data-text="&nbsp;About" color='#03e9f4'>&nbsp;About</ButtonLink>
                </SidebarLink>
                <SidebarLink to='skills' onClick={toggle} >
                    <ButtonLink data-text="&nbsp;Skills" color='#03e9f4'>&nbsp;Skills</ButtonLink>
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>
                    <ButtonLink data-text="&nbsp;Works" color='#03e9f4'>&nbsp;Works</ButtonLink>
                </SidebarLink>
                <SidebarLink to='services' onClick={toggle}>
                    <ButtonLink data-text="&nbsp;Contact" color='#03e9f4'>&nbsp;Contact</ButtonLink>
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