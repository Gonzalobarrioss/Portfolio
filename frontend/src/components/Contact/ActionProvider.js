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
      
      `En que te puedo ayudar?`,
      {
        delay: 1000,
        widget: 'selectOption',
        withAvatar: true
      }
         
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleHire = () => {
    
    const message = this.createChatbotMessage(
      
      `Que deseas saber?`,
      {
        delay: 1000,
        widget: 'hireOption',
        withAvatar: true
      }
         
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleHello = () =>  {
    const message = this.createChatbotMessage(
      'Gracias por saludar. Espero que andes bien!',
      {
        delay: 500
      }
      );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleClientResponse = (clientMessage) =>  {
    const message = this.createClientMessage(
      `${clientMessage}`
      );

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

  handleAbout = () =>  {
    const message = this.createChatbotMessage(
      `Entre al mundo del desarrollo hace ${new Date().getFullYear() - 2018} años. En el 2019 me recibi de Analista Programador.
        Comence mi experiencia laboral como Desarrollador web y Soporte tecnico en la Universidad Gastón Dachary en Abril del 2021,
        hasta septiembre de ese mismo año, que fue cuando ingrese en mi actual trabajo: SAMSA.
      `,
      {
        delay: 500
      }
      );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleBusqueda = () =>  {
    const message = this.createChatbotMessage(
      `Todavia estoy desarrollando este item
      `,
      {
        delay: 500
      }
      );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleDisponibilidad = () =>  {
    const message = this.createChatbotMessage(
      `Todavia estoy desarrollando este item
      `,
      {
        delay: 500
      }
      );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleOtrosIntereses = () =>  {
    const message = this.createChatbotMessage(
      `Todavia estoy desarrollando este item
      `,
      {
        delay: 500
      }
      );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;