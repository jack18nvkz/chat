import React from 'react';
import classes from "./message.module.css";
import Text from "../text/text";

const Message = ({mess, ...rest}) => {
    return (
        <div className={classes.message} style={{float: mess.side}}>
            <Text>{mess.data}</Text>
        </div>
    );
};

export default Message;