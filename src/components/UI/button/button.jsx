import React from 'react';
import classes from "./button.module.css";
const Button = ({children, ...props}) => {
    return (
        <button
            type={"button"}
            className={classes.button}
            style={{width: props.width, height: props.height, margin: props.margin}}
        >{children}</button>
    );
};

export default Button;