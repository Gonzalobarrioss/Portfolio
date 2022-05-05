import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection/Index'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import FaBackground from '../components/background'
import Works from '../components/Works'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        
        
        <InfoSection {...homeObjOne}/>
        <Skills />
        <Works />
        <Services />
        {/*<InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        */}
        <Footer />
    </div>
  )
}

export default Home