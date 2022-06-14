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
      case 'mail':

        props.actionProvider.handleClientResponse(`Enviar correo`)
        props.actionProvider.handleSendMail()
        props.actionProvider.handleHire()
        break;
      case 'intereses':
        props.actionProvider.handleClientResponse(`Quiero saber sobre tus intereses`)
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
       {/* <Option onClick={() => setOption('intereses')}>Intereses</Option> */}
        <a href='mailto:gonza.barrios.geb@gmail.com' style={{textDecoration: 'none', color: "#111"}} ><Option onClick={() => console.log("mail")}>Enviar correo</Option></a>
        <Option onClick={() => setOption('volver')}>Volver</Option>
      </OptionsList>
    </OptionsContainer>
  )
}

export default Contrato