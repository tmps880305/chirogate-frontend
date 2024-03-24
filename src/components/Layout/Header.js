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

    const navLinks = [{
        label: {main: "Home", alt: "Home", dest: ""}, subLabel: [],
    }, {
        label: {main: "About us", alt: "About us", dest: "about"}, subLabel: [{
            main: "About us", alt: "About us", state: {scrollTo: 'section1'}
        }, {
            main: "GMP Compliant History", alt: "History", state: {scrollTo: 'section2'}
        }, {
            main: "Facilities", alt: "Facilities", state: {scrollTo: 'section3'}
        }]
    }, {
        label: {main: "Prostaglandins API’s", alt: "Prost API", dest: "prostagAPI"}, subLabel: [{
            main: "Anti-Glaucoma", alt: "Anti-Glaucoma", state: {scrollTo: 'section1'}
        }, {
            main: "Pulmonary Arterial Hypertension", alt: "PAH", state: {scrollTo: 'section2'}
        }, {
            main: "Other Indications", alt: "Other Indications", state: {scrollTo: 'section3'}
        }, {
            main: "Veterinary Use", alt: "Veterinary Use", state: {scrollTo: 'section4'}
        }]
    }, {
        label: {main: "Prostaglandins API CDMO Services", alt: "CDMO Services", dest: "prostagCDMO"}, subLabel: [{
            main: "Crystalline form", alt: "Crystalline form", state: {scrollTo: 'section1'}
        }, {
            main: "Highest purity & quality", alt: "Highest purity / quality", state: {scrollTo: 'section2'}
        }, {
            main: "Efficiency Process", alt: "Efficiency Process", state: {scrollTo: 'section3'}
        }, {
            main: "Supply of Impurity & related substance",
            alt: "SoI & related substance",
            state: {scrollTo: 'section4'}
        }]
    }, {
        label: {
            main: "Special Intermediates Prostaglandins analogs", alt: "Special Analogs", dest: "specialProstag"
        }, subLabel: [{
            main: "CP-1 for E2/F2 series Prostaglandin analogs",
            alt: "CP-1 - E2/F2 series",
            state: {scrollTo: 'section1'}
        }, {
            main: "CP-2 for Benzindene Prostaglandin (Treprostinil)",
            alt: "CP-2 - Benzindene",
            state: {scrollTo: 'section2'}
        }, {
            main: "CP-3 for Benzoprostacyclin (Beraprost)",
            alt: "CP-3 - Benzoprostacyclin",
            state: {scrollTo: 'section3'}
        }, {
            main: "CP-4 for Carbaprostacyclin (Iloprost)",
            alt: "CP-4 - Carbaprostacyclin",
            state: {scrollTo: 'section4'}
        }, {
            main: "Intermediate for Isomer Free Latanoprost/Latanoprostene Bunod",
            alt: "Isomer Free Lat Bunod",
            state: {scrollTo: 'section5'}
        }, {
            main: "Intermediate for Isomer Free Travoprost",
            alt: "Isomer Free Travoprost",
            state: {scrollTo: 'section6'}
        }]

    }, {
        label: {main: "Contact", alt: "Contact", dest: "contact"}, subLabel: []
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
    }, [width]);


    return (<header className={classes.header} data-scroll={scrollState}>
        <div className={classes.headerContainer}>
            <NavLink className={classes.logo} to="">
                <img src={logoSrc} alt="Company name: Chirogate."/>
            </NavLink>

            <nav className={classes.navbar}>
                <ul className={classes.navlist}>
                    {navLinks.map(navLink => (
                            <li key={navLink.label.main} className={classes.navlistli}>
                                <div className={classes.dropWrap}>
                                    <NavLink className={classes.navlink}
                                             to={navLink.label.dest}
                                    > {
                                        navLink.label.main !== "Contact" ? (width > 1366 ? navLink.label.main : navLink.label.alt) :
                                            (<Button className={classes.navBut}>{navLink.label.main}</Button>)
                                    } </NavLink>
                                    {navLink.subLabel.length > 0 &&
                                        <ul key={navLink.label} className={classes.dropContent}>
                                            {navLink.subLabel.map(sub =>
                                                (<li key={sub.main} className={classes.droplist}>
                                                        <NavLink className={classes.droplink} to={navLink.label.dest}
                                                                 state={sub.state}>{width > 1366 ? sub.main : sub.alt}</NavLink>
                                                    </li>
                                                ))}
                                        </ul>}
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <div className={classes.burgerContainer}>
                <Hamburger scrollState={scrollState}/>
            </div>
        </div>
    </header>)
};

export default Header;
