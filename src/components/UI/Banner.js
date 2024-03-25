import React from 'react';
import classes from "./Banner.module.css";
import abtBanner from "../../assets/banner.png";


const Banner = (props) => {
    return (
        <div className={classes.abtBannerWrap}>
            <div className={classes.abtBannerTtl}>
                <h2>{props.children}</h2>
            </div>
            <img src={abtBanner} alt="Chirogate office view"/>
        </div>
    )

};

export default Banner;
