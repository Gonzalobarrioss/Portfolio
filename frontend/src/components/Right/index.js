import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import { RightContainer, List, SocialMediaRight } from './RightElements'

function Right() {
  return (
    <RightContainer>
        <List>
            <SocialMediaRight><FontAwesomeIcon icon={faWhatsapp} /></SocialMediaRight>
            <SocialMediaRight><FontAwesomeIcon icon={faTelegram} /></SocialMediaRight>
            <SocialMediaRight><FontAwesomeIcon icon={faLinkedinIn} /></SocialMediaRight>
            <SocialMediaRight><FontAwesomeIcon icon={faGithub} /></SocialMediaRight>
        </List>
    </RightContainer>
  )
}

export default Right