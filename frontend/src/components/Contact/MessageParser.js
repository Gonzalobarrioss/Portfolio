// in MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes('hola')) {
      this.actionProvider.handleHello();
    }



    if (message.includes('perro')) {
      this.actionProvider.handleDog();
    }
  }
}

export default MessageParser