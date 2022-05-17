

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleDog() {
    const message = this.createChatbotMessage(
      "Aqui tienes uno muy lindo!",
      {
        widget: 'dogPicture',
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleBtn() {
    const message = this.createChatbotMessage(
      "Oops, aun no funciona este boton :(",
      {
        widget: 'btnClose',
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleHello = () =>  {
    const message = this.createChatbotMessage('Gracias por saludar! Mientras continuo desarrollando te invito a que escribas "quiero un perro" y elegire uno especial para ti ♥');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;