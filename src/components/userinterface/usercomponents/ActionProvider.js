class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) 
   {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
   }
   
   greet = () =>{
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
   };
   
   addMessageToState = (message)=>{
    this.setState(prevState => ({
      ...prevState,
      messages:[...prevState.messages,message],
    }))
   }
  }

   
 
 export default ActionProvider;