// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../usercomponents/Options";


const config = {
    botName: "LearningBot",
  initialMessages: [createChatBotMessage(`Hello. What do you want to learn`,{
    widget: "options",
  }),
],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />
    },
  ],
}

export default config