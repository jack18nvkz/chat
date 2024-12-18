import React from 'react';
import classes from "./rightSection.module.css";
import Contact from "../contact/contact";

const RightSection = () => {
    return (
        <div className={classes.rightSection}>
            <Contact/>
            <Contact/>
            <Contact/>
        </div>
    );
};

export default RightSection;