import React, {useEffect, useState} from 'react';

import classes from './Hamburger.module.css'
import {NavLink} from "react-router-dom";

const Hamburger = (props) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsBurgerOpen(false);
    }, [scrollY]);

    const onHamburgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }

    return (
        <nav className={`${classes['hamburger-nav']} ${isBurgerOpen && classes.open}`}>
            <div className={classes['hamburger-wrap']} onClick={onHamburgerClick}>
                <div className={classes['hamburger-menu']}>
                    <div className={`${classes.line} ${classes['line-1']}`}></div>
                    <div className={`${classes.line} ${classes['line-2']}`}></div>
                    <div className={`${classes.line} ${classes['line-3']}`}></div>
                </div>
            </div>
            <div className={`${isBurgerOpen && classes['menu-bkg']}`} onClick={onHamburgerClick}></div>

            <div className={classes.menu}>
                <ul className={classes['menu-ul']}>
                    <li><NavLink className={classes.navlink} to=''>Home</NavLink></li>
                    <li><NavLink className={classes.navlink} to='about'>About</NavLink></li>
                    <li><NavLink className={classes.navlink} to='prostagAPI'>Prost API</NavLink></li>
                    <li><NavLink className={classes.navlink} to='prostagCDMO'>CDMO Services</NavLink></li>
                    <li><NavLink className={classes.navlink} to='specialProstag'>Special Analogs</NavLink></li>
                    <li><NavLink className={classes.navlink} to='specialProstag'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

export default Hamburger;
