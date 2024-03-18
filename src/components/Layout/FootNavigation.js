import React from 'react';

import classes from './FootNavigation.module.css'

const FootNavigation = (props) => {
    const items = props.contents;


    return (
        <div className={classes.footNaviCard}>
            <h3>{props.title}</h3>
            <ul>
                {items.map((cnt, index) => (
                    <li key={index}><h4>{cnt}</h4></li>
                ))}
            </ul>
        </div>
    )

};

export default FootNavigation;
