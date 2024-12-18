import React from 'react';
import classes from "./leftBar.module.css";
import LeftBarHead from "../left_bar_head/leftBarHead";
import LeftBarBody from "../left_bar_body/leftBarBody";
import LeftBarFooter from "../left_bar_footer/leftBarFooter";

const LeftBar = () => {
    return (
        <div className={classes.leftBar}>
            <LeftBarHead/>
            <LeftBarBody/>
            <LeftBarFooter/>
        </div>
    );
};

export default LeftBar;