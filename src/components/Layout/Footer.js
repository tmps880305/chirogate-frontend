import React from 'react';

import classes from './Footer.module.css';
import logoImg from '../../assets/logo_img.png';
import Button from "../UI/Button";
import FootNavigation from "./FootNavigation";
import useWindowSize from "../hooks/use-windowsize";

const Footer = (props) => {
    const {width} = useWindowSize();
    const navLinks = props.navLinks;

    return (
        <div className={classes.footer}>
            <div className={classes.footContainer}>
                {width > 768 &&
                    <>
                        <div className={classes.footTitleBar}>
                            <div className={classes.footLogo}>
                                <img src={logoImg} alt="Chirogate in footer."/>
                                <h2>Chirogate</h2>
                            </div>
                            <div className={classes.footBtn}>
                                <Button className={classes.footBtnDark}>Recruit</Button>
                                <Button>Contact</Button>
                            </div>
                        </div>

                        <div className={classes.footNavi}>
                            {navLinks.map((nav, index) => {
                                if (nav.label.main === 'Home' || nav.label.main === 'Contact') {
                                    return null;
                                } else {
                                    return <FootNavigation key={index} nav={nav}/>
                                }
                            })}
                        </div>
                    </>}
                <div className={classes.copyright}>
                    {width < 768 ?
                        <p>Copyright © CHIROGATE</p>
                        : <p>Copyright © 2024 CHIROGATE INTERNATIONAL INC. All rights reserved.</p>
                    }
                </div>
            </div>
        </div>
    )
};

export default Footer;
