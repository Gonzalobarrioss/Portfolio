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
import { changeTheme } from '../../redux/actions/StylesAction'
import { showChatbot } from '../../redux/actions/ChatbotAction'

import { useSelector } from 'react-redux'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

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
    
    const lightTheme = useSelector(state => state.stylesReducer.principal)
    

    const handleClick = () => {
        store.dispatch(changeTheme(!lightTheme))
    }

    return (
        <>
        <IconContext.Provider value={ lightTheme ?{color: '#111'} : {color: '#fff'}} >
            <Nav scrollnav={scrollNav} style={lightTheme ? {background: "#fff"} : null }>
                <NavbarContainer>
                      {/*  
                    <ToggleContainer className={lightTheme ? 'active' : 'inactive'} onClick={ () => handleClick() } >
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
                            <NavBtnLink to='/cv'>
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