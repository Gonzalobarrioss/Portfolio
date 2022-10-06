import React from 'react'

import HeroSection from '../components/HeroSection/Index'
import InfoSection from '../components/InfoSection'
import { about } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Works from '../components/Works'
import { LayoutContainer } from '../components/Layout/LayoutElements'
import Header from '../components/Header'
import Left from '../components/Left'
import Right from '../components/Right'
import Content from '../components/Content'
import Contact from '../components/Contact'
import Main from '../components/Main'

import Slider from '../components/Caroussel/Slider'
import { SliderData } from '../components/Caroussel/SliderData'

const Home = () => {

  

  return (
    <LayoutContainer>
      
    
      
      <Left />
      <Right />
      
        <Content>
          <Header/>
          <Main>
            <HeroSection />
            <InfoSection {...about}/>
            <Skills />
            <Works />
            <Services />
            <Contact/>
       {/*     <Slider slides={SliderData} /> */ }
          </Main>
          
        <Footer />
      </Content>
      
    </LayoutContainer>
  )
}

export default Home