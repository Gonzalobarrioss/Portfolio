import React, {useState} from 'react'
import {FaArrowAltcircleRight, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { SliderContainer } from './SliderElements'

const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

  return (
    <SliderContainer>
        <FaArrowAltCircleLeft className='left-arrow' onClick={console.log('first')} />
        <FaArrowAltCircleRight className='right-arrow' onClick={console.log('first')} />

        {slides.map((slide,index) => {
            return (
                <>{slide.image}</>
            )
        })}
    </SliderContainer>
  )
}

export default Slider