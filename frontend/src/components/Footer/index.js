import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaGithub,FaTelegram,FaLinkedinIn, FaTwitch} from 'react-icons/fa'
import {
    FooterWrap,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {

  return (
        <FooterWrap>
            <SocialMediaWrap>
                    
                    <SocialIcons>
                        <SocialIconLink href='//www.instagram.com/ponja__' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='//t.me/GonzaloBarrios' target='_blank' aria-label='Telegram'>
                            <FaTelegram />
                        </SocialIconLink>
                        <SocialIconLink href='https://github.com/Gonzalobarrioss' target='_blank' aria-label='Github'>
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href='//www.twitch.com/' target='_blank' aria-label='Twitch'>
                            <FaTwitch />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/gonzaloezequielbarrios/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedinIn />
                        </SocialIconLink>
                    </SocialIcons>
                    <WebsiteRights>Powered by Gonzalo Barrios {new Date().getFullYear()}</WebsiteRights>

                </SocialMediaWrap>
        </FooterWrap>
  )
}

export default Footer