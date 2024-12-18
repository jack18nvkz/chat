import React, {useState} from 'react';
import classes from "./rightBarChat.module.css";
import ChatHead from "../chat_head/chatHead";
import ChatField from "../chat_field/chatField";
import ChatInput from "../chat_input/chatInput";

const RightBarChat = () => {
    let num = 0;
    const [messages, setMessages] = useState([]);
    const createMessage = (message) => {
        setMessages([...messages, message]);
    }

    return (
        <div className={classes.rightBarChat}>
            <ChatHead/>
            <ChatField messages={messages}/>
            <ChatInput createMessage={createMessage}/>
        </div>
    );
};

export default RightBarChat;