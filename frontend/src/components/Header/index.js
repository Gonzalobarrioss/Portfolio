import React, {useState}  from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { HeaderContainer } from './HeaderElements'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
    </>
  )
}

export default Header