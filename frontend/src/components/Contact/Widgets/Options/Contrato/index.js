import React from 'react'
import { OptionsContainer, OptionsList, Option } from '../OptionsElements'

function Contrato(props) {

  const setOption = (option) => {
    
    switch (option) {
      case 'aboutme':
        props.actionProvider.handleClientResponse(`Cuentame de ti`)
        props.actionProvider.handleAbout()
        props.actionProvider.handleHire()
      break;
      case 'habilidades':
        props.actionProvider.handleClientResponse(`Principales habilidades`)
        props.actionProvider.handleHabilidades()
        props.actionProvider.handleHire()
        break;
      case 'disponibilidad':
        props.actionProvider.handleClientResponse(`Disponibilidad`)
        props.actionProvider.handleDisponibilidad()
        props.actionProvider.handleHire()
        break;
      case 'intereses':
        props.actionProvider.handleClientResponse(`Otros intereses`)
        props.actionProvider.handleOtrosIntereses()
        props.actionProvider.handleHire()
        break;
      case 'volver':
          props.actionProvider.handleClientResponse(`Volver al menu`)
          props.actionProvider.handleOptions()
          
          break;
      default:
        break;
    }
    
  }

  return (
    <OptionsContainer>
      <OptionsList>
        <Option onClick={() => setOption('aboutme')}>Cuentame de ti</Option>
        <Option onClick={() => setOption('habilidades')}>Principales habilidades</Option>
        <Option onClick={() => setOption('disponibilidad')}>Disponibilidad</Option>
        <Option onClick={() => setOption('intereses')}>Otros intereses</Option>
        <Option onClick={() => setOption('volver')}>Volver</Option>
      </OptionsList>
    </OptionsContainer>
  )
}

export default Contrato