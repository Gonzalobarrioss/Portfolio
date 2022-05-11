import React from 'react'
import {FaFacebookF,FaInstagram,FaYoutube,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
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
                        <SocialIconLink href='//www.instagram.com/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='//www.facebook.com/' target='_blank' aria-label='Facebook'>
                            <FaFacebookF />
                        </SocialIconLink>
                        <SocialIconLink href='//www.youtube.com/' target='_blank' aria-label='Youtube'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='//www.twitter.com/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedinIn />
                        </SocialIconLink>
                    </SocialIcons>
                    <WebsiteRights>Gonzalo Barrios {new Date().getFullYear()} All rights reserved.</WebsiteRights>

                </SocialMediaWrap>
        </FooterWrap>
  )
}

export default Footer