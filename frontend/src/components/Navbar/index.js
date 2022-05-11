import React, {useState, useEffect} from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    GlowingText,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    
      return () => {
        
      }
    }, [])
    


    return (
        <>
        <IconContext.Provider value={{color: '#fff'}} >
            <Nav scrollnav={scrollNav}>
                <NavbarContainer>
                        
                    
                    <NavLogo>
                        <FontAwesomeIcon icon={isClicked ? faToggleOn : faToggleOff }  onClick={() => setIsClicked(prev => !prev)}  />
                        
                        {/*<GlowingText>@</GlowingText>*/}
                    </NavLogo>
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills' 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                Skills
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='works'
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                Works
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/'>Descarga PDF</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar