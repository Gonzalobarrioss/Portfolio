import React from 'react'
import { OptionsContainer, OptionsList, Option } from '../OptionsElements'

function Contrato(props) {

  const setOption = (option) => {
    
    switch (option) {
      case 'aboutme':
        props.actionProvider.handleClientResponse(`Cuentame de ti`)
        props.actionProvider.handleAbout()
      break;
      case 'busqueda':
        props.actionProvider.handleClientResponse(`Que buscas?`)
        props.actionProvider.handleBusqueda()
        break;
      case 'disponibilidad':
        props.actionProvider.handleClientResponse(`Disponibilidad p/ entrevista`)
        props.actionProvider.handleDisponibilidad()
        break;
      case 'intereses':
        props.actionProvider.handleClientResponse(`Otros intereses`)
        props.actionProvider.handleOtrosIntereses()
        break;
      default:
        break;
    }
    
  }

  return (
    <OptionsContainer>
      <OptionsList>
        <Option onClick={() => setOption('aboutme')}>Cuentame de ti</Option>
        <Option onClick={() => setOption('busqueda')}>Que buscas?</Option>
        <Option onClick={() => setOption('disponibilidad')}>Disponibilidad p/ entrevista</Option>
        <Option onClick={() => setOption('intereses')}>Otros intereses</Option>
      </OptionsList>
    </OptionsContainer>
  )
}

export default Contrato