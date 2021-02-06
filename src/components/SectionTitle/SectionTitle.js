import React from 'react';
import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
    return (
        <h1 className={classes.SectionTitle}>{props.title}</h1>
    );
};

export default SectionTitle;