import React from 'react';

import classes from './MainIntro.module.css'
import Button from "../UI/Button";

const MainIntro = (props) => {
    return (
        <div className={classes.introContainer}>
            <div className={classes.introCard}>
                <h3>CHIROGATE</h3>
                <h2>Pioneers Prostaglandin APIs synthesis with unique chemistry expertise</h2>
                <p>Chirogate offers the market's purest Prostaglandin APIs, compliant with major Pharmacopoeias</p>
                <Button>show more</Button>
            </div>
        </div>
    )
};

export default MainIntro;
