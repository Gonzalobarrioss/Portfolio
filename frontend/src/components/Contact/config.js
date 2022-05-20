import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'
import { createChatBotMessage, createCustomMessage, createClientMessage } from 'react-chatbot-kit';

import  HeaderChat  from './ChatbotElements/HeaderChat';

import DogPicture from './Widgets/DogPicture';
import Options from './Widgets/Options';
import Contrato from './Widgets/Options/Contrato';

const botName = 'Gonzalo';


const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hola, como estas? Mi nombre es ${botName}. Por el momento el chat se encuentra en desarrollo. Vuelve pronto para ver los avances!`,
      {
        withAvatar: true,
        loading: false,
        delay: 500,
        widget: 'selectOption'
      }
    ) 
  ] ,
  state: {
    gist: '',
    infoBox: ''
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />
    },
    {
      widgetName: 'selectOption',
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ['gist', 'infoBox'],
    },
    {
      widgetName: 'hireOption',
      widgetFunc: (props) => <Contrato {...props} />,
      mapStateToProps: ['gist', 'infoBox'],
    },
  ],
  
  customStyles: {
    botMessageBox: {
      backgroundColor: '#0a192f',
    },
    chatButton: {
      backgroundColor: 'lightblue',
    }
  },
  customComponents: {
    // Replaces the default header
   header: () => <HeaderChat>Conversa con Gonzalo</HeaderChat> ,
   // Replaces the default bot chat message container
   //botChatMessage: (props) => <MyCustomChatMessage {...props} />,
   
   // Replaces the default bot avatar
  /* botAvatar: (props) => <MyAvatar {...props} />,
   
   // Replaces the default user icon
   userAvatar: (props) => <MyCustomAvatar {...props} />,
   // Replaces the default user chat message */
   //userChatMessage: () => <div> asd</div>
 },
 customMessages: {
  custom: (props) => <Options {...props} />
 }
};

export default config;