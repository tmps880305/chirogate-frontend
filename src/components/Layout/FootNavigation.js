import React from 'react';

import classes from './FootNavigation.module.css'
import {NavLink} from "react-router-dom";

const FootNavigation = (props) => {
    const items = props.nav;

    return (
        <div className={classes.footNaviCard}>
            <NavLink className={classes.footNavMain} to={items.label.dest}
                     state={items.label.state}>{items.label.main}</NavLink>
            <ul>
                {items.subLabel.map((sub, index) => (
                    <li key={index}>
                        <NavLink className={classes.footNavSub} to={items.label.dest}
                                 state={sub.state}>{sub.main}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )

};

export default FootNavigation;
