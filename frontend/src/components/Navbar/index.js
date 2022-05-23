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
    NavBtnLink,
    ToggleContainer,
    Indicator
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"
import Contact from '../Contact'

import { store } from '../../redux/store'
import { showChatbot } from '../../redux/actions/ChatbotAction'

const Navbar = ({toggle,}) => {

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
    
    const handleClick = () => {
        setIsClicked(!isClicked)
        console.log("first", isClicked)
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}} >
            <Nav scrollnav={scrollNav}>
                <NavbarContainer>
                        
                    <ToggleContainer onClick={ () => console.log("click") } >
                        <Indicator />
                    </ToggleContainer>
                   {/* <NavLogo>
                        

                       /* <FontAwesomeIcon icon={isClicked ? faToggleOn : faToggleOff }  onClick={() => setIsClicked(prev => !prev)}  /> 
                        
                        <GlowingText>@</GlowingText>
                    </NavLogo>*/}
                    
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
                            offset={0}
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
                            offset={0}
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
                            offset={0}
                            >
                                Works
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/' onClick={() => store.dispatch(showChatbot(true))}>
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Descargar PDF
                            </NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar