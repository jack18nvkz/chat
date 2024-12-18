import React from 'react';
import classes from "./leftSection.module.css";
import Button from "../button/button";

const LeftSection = () => {
    return (
        <div className={classes.leftSection}>
            <Button margin={'1ex auto'}>Cont</Button>
            <Button margin={'1ex auto'}>Room</Button>
        </div>
    );
};

export default LeftSection;