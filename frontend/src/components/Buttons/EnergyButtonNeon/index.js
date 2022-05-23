import React from 'react'
import { Button, ButtonContainer } from './EnergyButtonNeonElements'
import { store } from '../../../redux/store'
import { showChatbot } from '../../../redux/actions/ChatbotAction'

function EnergyButtonNeon() {



  return (
    <ButtonContainer>
        <Button onClick={() => store.dispatch(showChatbot(true))}><span>Quiero una pagina</span> </Button>
    </ButtonContainer>
  )
}

export default EnergyButtonNeon