import React, {useEffect, useState} from 'react';

import logoImg from '../../assets/logo.png';
import logoImgSm from '../../assets/logo_img.png';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "../UI/Button";
import Hamburger from "../UI/Hamburger";
import useWindowSize from "../hooks/use-windowsize";

const Header = (props) => {
    const [scrollState, setScrollState] = useState('top');
    const [logoSrc, setLogoSrc] = useState(logoImg);
    const {width} = useWindowSize();

    const navLinks = [
        {
            label: "Home",
            altLabel: "Home",
            destination: ""
        },
        {
            label: "About",
            altLabel: "About",
            destination: "about"
        },
        {
            label: "Prostaglandins API’s",
            altLabel: "Prost API",
            destination: "prostagAPI"
        },
        {
            label: "Prostaglandins API CDMO Services",
            altLabel: "CDMO Services",
            destination: "prostagCDMO"
        },
        {
            label: "Special Intermediates Prostaglandins analogs",
            altLabel: "Special Analogs",
            destination: "specialProstag"
        },
        {
            label: "Contact",
            altLabel: "Contact",
            destination: "contact"
        }

    ]

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

                if (width > 1366) {
                    setLogoSrc(logoImgSm);
                }

            } else {
                setScrollState('top');
                setLogoSrc(logoImg);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={classes.header} data-scroll={scrollState}>
            <div className={classes.headerContainer}>
                <NavLink className={classes.logo} to=''>
                    <img src={logoSrc} alt="Company name: Chirogate."/>
                </NavLink>

                <nav className={classes.navbar}>
                    <ul>
                        {navLinks.map(navLink => {
                            let label = "";
                            if (navLink.label !== "Contact") {
                                label = width > 1366 ? navLink.label : navLink.altLabel;
                            } else {
                                label = <Button className={classes.navBut}>{navLink.label}</Button>;
                            }

                            return <li key={navLink.label}>
                                <NavLink className={classes.navlink} to={navLink.destination}> {label} </NavLink></li>;

                        })}
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
