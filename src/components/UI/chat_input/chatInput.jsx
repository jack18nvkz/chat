import React from 'react';
import classes from "./chatInput.module.css";
import Button from "../button/button";
import InputText from "../input_text/inputText";

const ChatInput = ({createMessage}) => {
    const getMessage = (mess) => {
        createMessage(mess);
    }

    return (
        <div className={classes.chatInput}>
            <InputText getMessage={getMessage}/>
            <Button>Send</Button>
        </div>
    );
};

export default ChatInput;