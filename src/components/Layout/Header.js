import React, {useEffect, useState} from 'react';

import logoImg from '../../assets/logo.png';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "../UI/Button";
import Hamburger from "../UI/Hamburger";

const Header = (props) => {
    const [scrollState, setScrollState] = useState('top');

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const thresholdInPixels = 0.05 * scrollHeight;
            const thresholdInPixels_btm = 0.9 * scrollHeight;
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > thresholdInPixels) {
                if (currentScrollPos < thresholdInPixels_btm) {
                    setScrollState('scrolled');
                } else {
                    setScrollState('bottom');
                }
            } else {
                setScrollState('top');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={classes.header} data-scroll={scrollState}>
            <div className={classes.headerContainer}>
                {scrollState === 'top' && <NavLink className={classes.logo}>
                    <img src={logoImg} alt="Logo image."/>
                </NavLink>}

                <nav className={classes.navbar}>
                    <ul>
                        <li><NavLink className={classes.navlink} to=''>Home</NavLink></li>
                        <li><NavLink className={classes.navlink} to='about'>About</NavLink></li>
                        <li><NavLink className={classes.navlink} to='prostagAPI'>Prostaglandins API’s</NavLink></li>
                        <li><NavLink className={classes.navlink} to='prostagCDMO'>Prostaglandins API CDMO
                            Services</NavLink></li>
                        <li><NavLink className={classes.navlink} to='specialProstag'>Special Intermediates
                            Prostaglandins
                            analogs</NavLink></li>
                        {scrollState === 'top' &&
                            <li className={classes.navlink}>
                                <NavLink className={classes.navlink} to='contact'>
                                    <Button className={classes.navBut}>
                                        Contact
                                    </Button>
                                </NavLink>
                            </li>}
                    </ul>
                </nav>
                <div className={classes.burgerContainer}>
                    <Hamburger scrollState={scrollState}/>
                </div>
            </div>
        </header>
    )
};

export default Header;
