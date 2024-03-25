import React from 'react';

import classes from './ContactPage.module.css'
import abtBanner from "../../assets/banner.png";

const ContactPage = (props) => {

    const banner =
        <div className={classes.abtBannerWrap}>
            <div className={classes.abtBannerTtl}>
                <h2>Contact us</h2>
            </div>
            <img src={abtBanner} alt="Chirogate office view"/>
        </div>;

    return (
        <div className={classes.abt}>
            {banner}
            <div className={classes.abtContainer}>

            </div>
        </div>
    )
};

export default ContactPage;
