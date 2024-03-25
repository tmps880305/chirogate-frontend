import React from 'react';
import classes from "./Banner.module.css";
import banner from "../../assets/banner.png";


const Banner = (props) => {
    return (
        <div className={classes.bannerWrap}>
            <div className={classes.bannerTtl}>
                <h2>{props.children}</h2>
            </div>
            <img src={banner} alt="Chirogate office view"/>
        </div>
    )

};

export default Banner;
