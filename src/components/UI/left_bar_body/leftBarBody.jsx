import React from 'react';
import classes from "./leftBarBody.module.css";
import LeftSection from "../left_section/leftSection";
import RightSection from "../right_section/rightSection";

const LeftBarBody = () => {
    return (
        <div className={classes.leftBarBody}>
            <LeftSection/>
            <RightSection/>
        </div>
    );
};

export default LeftBarBody;