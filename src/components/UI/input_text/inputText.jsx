import React, {useState} from 'react';
import classes from "./inputText.module.css";

const InputText = ({getMessage}) => {
    const [text, setText] = useState('');
    const onKeyDown = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            getMessage({data: text, side: 'right'});
            setText('');
        }
    };

    return (
        <textarea
            value={text}
            onChange={e => {setText(e.target.value)}}
            onKeyDown={onKeyDown}
            className={classes.inputText}
            placeholder="Сообщение...">
        </textarea>
    );
};

export default InputText;