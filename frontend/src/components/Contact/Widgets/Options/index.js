import React from 'react'
import { OptionsContainer, OptionsList, Option } from './OptionsElements'

function Options(props) {

  

  const setOption = (option) => {
    
    switch (option) {
      case 'saludar':
        props.actionProvider.handleHello()
        props.actionProvider.handleOptions()
      break;
      case 'presupuesto':
        props.actionProvider.handlePresupuesto()
        break;
      case 'contratar':
        props.actionProvider.handleContratar()
        break;
    
      default:
        break;
    }
    console.log(props)
  }

  return (
    <OptionsContainer>
      <OptionsList>
        <Option onClick={() => setOption('saludar')}>Solo vine a saludar</Option>
        <Option onClick={() => setOption('presupuesto')}>Quiero un presupuesto</Option>
        <Option onClick={() => setOption('contratar')}>Quiero contratarte</Option>
      </OptionsList>
    </OptionsContainer>
  )
}

export default Options