import React  from 'react'
import { ChatMessageContainer } from './ChatMessageElements'
function MyCustomChatMessage({props}) {
    console.log(props)
  return (
    <ChatMessageContainer>
        {props}
    </ChatMessageContainer>
  )
}

export default MyCustomChatMessage