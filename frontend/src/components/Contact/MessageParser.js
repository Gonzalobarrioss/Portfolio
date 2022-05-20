// in MessageParser.js

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }



  parse(message) {
    if ((message.toLowerCase()).includes('hola')) {
      this.actionProvider.handleHello();
    } 
  }
}

export default MessageParser