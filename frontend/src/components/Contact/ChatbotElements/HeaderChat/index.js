import React from 'react'
import { Header, HeaderButton } from './HeaderElements'

import { store } from '../../../../redux/store'
import { showChatbot } from '../../../../redux/actions/ChatbotAction'

function HeaderChat({children}) {
  return (
    <Header>
      {children}
      <HeaderButton onClick={() => store.dispatch(showChatbot(false))}>X</HeaderButton>
    </Header>     
  )
}

export default HeaderChat