import classes from "./chatField.module.css";
import Message from "../message/message";

const ChatField = ({messages}) => {
    let key = 0
    return (
        <div className={classes.chatFiled}>
            {messages.map(mess => <Message mess={mess} key={key++}/>)}
        </div>
    );
};

export default ChatField;