import React from 'react';
import classes from "./Landing.module.css"
import mainBackground from "../assets/mainpage_background.png";


const Rentals = (props) => {

    return (
        <div className={classes["landing-container"]}>
            <div className={classes["main-image"]}>
                <img src={mainBackground} alt="Landing page background image."/>
            </div>
            <div className={classes["main-ttl-container"]}>
                <h2>A Professional Prostaglandin Manufacturer</h2>
            </div>
        </div>
    )
};

export default Rentals;
