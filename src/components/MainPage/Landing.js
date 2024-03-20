import React, {useEffect, useState} from 'react';
import classes from "./Landing.module.css"
import mainBackground from "../../assets/mainpage_background.png";
import useWindowSize from "../hooks/use-windowsize";

const Landing = (props) => {
    const {width} = useWindowSize();
    const [mainTitle, setMainTitle] = useState('');

    useEffect(() => {
        if (width < 769) {
            setMainTitle('Chirogate')
        } else {
            setMainTitle('A Professional Prostaglandin Manufacturer')
        }
    }, [width]);

    return (
        <div className={classes["landing-container"]}>
            <div className={classes["main-image"]}>
                <img src={mainBackground} alt="Landing page background."/>
            </div>
            <div className={classes["main-ttl-container"]}>
                <h2>{mainTitle}</h2>
            </div>
        </div>
    )
};

export default Landing;
