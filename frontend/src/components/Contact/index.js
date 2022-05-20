import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

import { ContactContainer } from './ContactElements.js';

import { useSelector } from 'react-redux'
import './Chatbot.css'

function Contact() {

    const showChatbot = useSelector( state => state.chatbotReducer.status)

    return (
        <ContactContainer>
            {
                showChatbot && (
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />
                )
            }     
        </ContactContainer>
    );
}

export default Contact