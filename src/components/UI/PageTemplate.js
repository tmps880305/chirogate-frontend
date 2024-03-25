import React from 'react';
import classes from "./PageTemplate.module.css";
import Banner from "./Banner";


const PageTemplate = (props) => {
    return (
        <div className={classes.abt}>
            <Banner>{props.title}</Banner>
            <div className={classes.abtContainer}>
                {props.children}
            </div>
        </div>
    )

};

export default PageTemplate;
