import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram,faTwitter, faTwitch, faWhatsapp, faTelegram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import { LeftContainer, List, SocialMediaLeft } from './LeftElements'

function Left() {
  return (
    <LeftContainer>
        <List>
          { /* <SocialMediaLeft><FontAwesomeIcon icon={faFacebookF} /></SocialMediaLeft> */}

            <SocialMediaLeft href='https://instagram.com/ponja__' target={'_blank'}><FontAwesomeIcon icon={faInstagram} /></SocialMediaLeft>
          { /*   <SocialMediaLeft><FontAwesomeIcon icon={faTwitter} /></SocialMediaLeft>   */}
            <SocialMediaLeft href='https://twitch.com' target={'_blank'}><FontAwesomeIcon icon={faTwitch} /></SocialMediaLeft>
          { /* <SocialMediaLeft><FontAwesomeIcon icon={faWhatsapp} /></SocialMediaLeft>   */}
            <SocialMediaLeft href='https://t.me/GonzaloBarrios' target={'_blank'}><FontAwesomeIcon icon={faTelegram} /></SocialMediaLeft>
            <SocialMediaLeft href='https://www.linkedin.com/in/gonzaloezequielbarrios/' target={'_blank'}><FontAwesomeIcon icon={faLinkedinIn} /></SocialMediaLeft>
            <SocialMediaLeft href='https://github.com/Gonzalobarrioss' target={'_blank'}><FontAwesomeIcon icon={faGithub} /></SocialMediaLeft>
          
        </List>
    </LeftContainer>
  )
}

export default Left