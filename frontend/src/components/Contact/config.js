import { createChatBotMessage } from 'react-chatbot-kit';
import { HeaderChat } from './ChatbotElements/HeaderChat/HeaderElements';

import DogPicture from './DogPicture';

const botName = 'Gonzalo';

const config = {
  initialMessages: [createChatBotMessage(`Hola, como estas? Mi nombre es ${botName}. Por el momento el chat se encuentra en desarrollo. Vuelve pronto para ver los avances!`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />
    },
   /* {
      // defines the name you will use to reference to this widget in "createChatBotMessage".
      widgetName: 'singleFlight',
      // Function that will be called internally to resolve the widget
      widgetFunc: (props) => <SingleFlight {...props} />,
      // Any props you want the widget to receive on render
      props: {},
      // Any piece of state defined in the state object that you want to pass down to this widget
      mapStateToProps: ['selectedFlightId', 'selectedFlight'],
    },*/
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376b7e'
    },
    chattButton: {
      backgroundColor: '#5ccc9d'
    }
  },
  state: {
    myCustomProperty: 'Bikershorts',
  },
  customComponents: {
    // Replaces the default header
    //<button onClick={() =>console.log("Fix btn") } style={{width: "20px", height: "20px", border:"none",display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>X</button>
   header: () => <HeaderChat >Conversa con Gonzalo</HeaderChat> ,
   // Replaces the default bot avatar
  /* botAvatar: (props) => <MyAvatar {...props} />,
   // Replaces the default bot chat message container
   botChatMessage: (props) => <MyCustomChatMessage {...props} />,
   // Replaces the default user icon
   userAvatar: (props) => <MyCustomAvatar {...props} />,
   // Replaces the default user chat message
   userChatMessage: (props) => <MyCustomUserChatMessage {...props} /> */
 },
};

export default config;