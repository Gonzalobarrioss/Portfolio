import React from 'react'
import { OptionsContainer, OptionsList, Option } from './OptionsElements'

function Options(props) {

  

  const setOption = (option) => {
    
    switch (option) {
      case 'saludar':
        props.actionProvider.handleClientResponse(`Solo vine a saludar`)
        props.actionProvider.handleHello()
        props.actionProvider.handleOptions()
        
      break;
      case 'presupuesto':
        props.actionProvider.handleClientResponse(`Quiero una página`)
        props.actionProvider.handlePresupuesto()
        props.actionProvider.handleOptions()
        break;
      case 'contratar':
        props.actionProvider.handleClientResponse(`Quiero contratarte`)
        props.actionProvider.handleContratar()
        props.actionProvider.handleHire()
        break;
      case 'perro':
        props.actionProvider.handleDog()
        props.actionProvider.handleOptions()
        break;
      default:
        break;
    }
    //console.log(props)
  }

  return (
    <OptionsContainer>
      <OptionsList>
        <Option onClick={() => setOption('saludar')}>Solo vine a saludar</Option>
        <Option onClick={() => setOption('presupuesto')}>Quiero una pagina</Option>
        <Option onClick={() => setOption('contratar')}>Quiero contratarte</Option>
       {/* <Option onClick={() => setOption('perro')}>Muestrame un perrito</Option> */ }
      </OptionsList>
    </OptionsContainer>
  )
}

export default Options