import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

import { ContactContainer } from './ContactElements.js';



function Contact() {


    const [showBot, toggleBot] = useState(false);

    const handleBtn = () => {
        toggleBot(false)
    }

    return (
        <ContactContainer>
            {showBot && (
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            )}
          
            <button 
            onClick={() => toggleBot((prev) => !prev)}
            style={{fontFamily: 'Poppins', fontSize: "16px", padding: "5px", borderRadius: "5px", border: "none", marginRight: "5px", cursor: "pointer" }}
            >
                {showBot ? `Cerrar` : `Chat`}
            </button>
        </ContactContainer>
    );
}

export default Contact