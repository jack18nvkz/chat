import React from 'react';
import classes from "./contact.module.css";
import Icon from "../icon/icon";
import Text from "../text/text";

const Contact = () => {
    return (
        <div className={classes.contact}>
            <Icon width={'35px'} height={'35px'}/>
            <Text/>
        </div>
    );
};

export default Contact;