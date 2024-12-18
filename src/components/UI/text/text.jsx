import React from 'react';
import classes from "./text.module.css";

const Text = ({children}) => {
    return (
        <div className={classes.text}>
            {children}
        </div>
    );
};

export default Text;