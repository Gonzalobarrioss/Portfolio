import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
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
                <SidebarLink to='about' onClick={toggle} color={'--clr'} attr={"data-text"}>
                    About
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle} color={'--clr'} attr={"data-text"}>
                    Works
                </SidebarLink>
                <SidebarLink to='services' onClick={toggle} color={'--clr'} attr={"data-text"}>
                    Contact
                </SidebarLink>
                {/*
                <SidebarLink to='signup' onClick={toggle}>
                    Sign Up
                </SidebarLink>
                */}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>
                    Sign In
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar