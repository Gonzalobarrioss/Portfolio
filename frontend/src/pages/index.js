import React from 'react'

import HeroSection from '../components/HeroSection/Index'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Works from '../components/Works'
import { LayoutContainer } from '../components/Layout/LayoutElements'
import Header from '../components/Header'
import Left from '../components/Left'
import Right from '../components/Right'
import Content from '../components/Content'
import Main from '../components/Main'

const Home = () => {

   

  return (
    <LayoutContainer>
      <Header />
    
        <Left />
        <Right />
        
        <Content>
            <Main>
              <InfoSection {...homeObjOne}/>
              <Skills />
              <Works />
              <Services />
              {/*<InfoSection {...homeObjTwo}/>
              <Services />
              <InfoSection {...homeObjThree}/>
              */}
            </Main>
            <Footer />
        </Content>
        <HeroSection />
    </LayoutContainer>
  )
}

export default Home