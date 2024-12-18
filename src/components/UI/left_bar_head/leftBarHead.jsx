import React from 'react';
import classes from "./leftBarHead.module.css";
import Icon from "../icon/icon";
import Text from "../text/text";
import Button from "../button/button";

const LeftBarHead = () => {
    return (
        <div className={classes.leftBarHead}>
            <Icon/>
            <Text>User001</Text>
            <Button width={'25px'} height={'25px'}>CS</Button>
        </div>
    );
};

export default LeftBarHead;