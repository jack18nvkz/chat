import React from 'react';
import classes from "./icon.module.css";

const Icon = (props) => {
    return (
        <div className={classes.icon} style={{width: props.width, height: props.height}}>

        </div>
    );
};

export default Icon;