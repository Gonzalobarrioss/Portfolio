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

  handleOptions = () => {
    const message = this.createChatbotMessage(
      
      ``,
      {
        widget: 'selectOption'
      }
        
      
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleHello = () =>  {
    const message = this.createChatbotMessage('Gracias por saludar! Mientras continuo desarrollando te invito a que escribas "muestrame un perro" y elegire uno especial para ti');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handlePresupuesto = () =>  {
    
    const message = this.createChatbotMessage(
      `Aun estoy preparando este item`,
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleContratar = () =>  {
    
    const message = this.createChatbotMessage(
      `Actualmente me encuentro trabajando, pero si tenes una propuesta que creas que pueda interesarme podemos organizar un meet. 
        Envíame un correo y trataré de responder lo mas pronto posible`, 
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;