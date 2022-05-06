import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram,faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons"

import { LeftContainer, List, SocialMediaLeft } from './LeftElements'

function Left() {
  return (
    <LeftContainer>
        <List>
            <SocialMediaLeft><FontAwesomeIcon icon={faFacebookF} /></SocialMediaLeft>
            <SocialMediaLeft><FontAwesomeIcon icon={faInstagram} /></SocialMediaLeft>
            <SocialMediaLeft><FontAwesomeIcon icon={faTwitter} /></SocialMediaLeft>
            <SocialMediaLeft><FontAwesomeIcon icon={faTwitch} /></SocialMediaLeft>
        </List>
    </LeftContainer>
  )
}

export default Left