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
    
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}} >
            <Nav scrollNav={scrollNav}>
                <NavbarContainer >
                    <NavLogo to='/' onClick={toggleHome}>
                        <GlowingText>eureka</GlowingText>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                Start
                            </NavLinks>
                        </NavItem>
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
                            <NavLinks to='discover'
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
                        
                    </NavMenu>
                    {/*
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sing In</NavBtnLink>
                    </NavBtn>*/}

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar