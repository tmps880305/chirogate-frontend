import React from 'react';

import classes from './SubIntroCard.module.css'

const SubIntroCard = (props) => {
    let bkColor = '';
    let isReverse = true;

    switch (props.bkColor) {
        case 'yellow':
            isReverse = false;
            bkColor = classes.bkYellow;
            break;
        case 'orange':
            isReverse = false;
            bkColor = classes.bkOrange;
            break;
        default:
            break;
    }

    return (
        <div className={`${classes.subIntroContainer}  ${bkColor}`}>
            <div className={`${classes.subIntroCard} ${isReverse && classes.reverse} `}>
                <div className={classes.subIntroCnt}>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
                <div className={classes.subIntroImg}>
                    <img src={props.img} alt="Sub introduction."/>
                </div>
            </div>
        </div>
    )
};

export default SubIntroCard;
