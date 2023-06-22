import React from "react";

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from "./Config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

export default function ChatBot(){

    
    return(
        <div  
  >
         
         <Chatbot style={{ width:"50%",height:'50%'}}
         config={config}
         actionProvider={ActionProvider}
         messageParser={MessageParser}
         />
        </div>
    )
}