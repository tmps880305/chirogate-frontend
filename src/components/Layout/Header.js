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
                subLabel: [],
                altSubLabel: [],
                destination: {
                    pathname: ''
                }
            },
            {
                label: "About us",
                altLabel: "About us",
                subLabel: ['About us', 'GMP Compliant History', 'Facilities'],
                altSubLabel: ['About us', 'History', 'Facilities'],
                destination: {
                    pathname: 'about',
                    state: {scrollTo: 'section1'}
                }
            },
            {
                label: "Prostaglandins API’s",
                altLabel: "Prost API",
                subLabel: ['Anti-Glaucoma', 'Pulmonary Arterial Hypertension', 'Other Indications', 'Veterinary Use'],
                altSubLabel: ['Anti-Glaucoma', 'PAH', 'Other Indications', 'Veterinary Use'],
                destination: {
                    pathname: 'prostagAPI'
                }
            },
            {
                label: "Prostaglandins API CDMO Services",
                altLabel: "CDMO Services",
                subLabel: ['Crystalline form', 'Highest purity & quality', 'Efficiency Process', 'Supply of Impurity & related substance'],
                altSubLabel: ['Crystalline form', 'Highest purity / quality', 'Efficiency Process', 'SoI & related substance'],
                destination: {
                    pathname: 'prostagCDMO'
                }

            },
            {
                label: "Special Intermediates Prostaglandins analogs",
                altLabel: "Special Analogs",
                subLabel: [
                    'CP-1 for E2/F2 series Prostaglandin analogs',
                    'CP-2 for Benzindene Prostaglandin (Treprostinil)',
                    'CP-3 for Benzoprostacyclin (Beraprost)',
                    'CP-4 for Carbaprostacyclin (Iloprost)',
                    'Intermediate for Isomer Free Latanoprost/Latanoprostene Bunod',
                    'Intermediate for Isomer Free Travoprost'
                ],
                altSubLabel: [
                    'CP-1 - E2/F2 series',
                    'CP-2 - Benzindene',
                    'CP-3 - Benzoprostacyclin',
                    'CP-4 - Carbaprostacyclin',
                    'Isomer Free Lat Bunod',
                    'Isomer Free Travoprost'
                ],
                destination: {
                    pathname: 'specialProstag'
                }
            },
            {
                label: "Contact",
                altLabel: "Contact",
                subLabel: [],
                altSubLabel: [],
                destination: {
                    pathname: 'contact'
                }
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


        return (
            <header className={classes.header} data-scroll={scrollState}>
                <div className={classes.headerContainer}>
                    <NavLink className={classes.logo} to="">
                        <img src={logoSrc} alt="Company name: Chirogate."/>
                    </NavLink>

                    <nav className={classes.navbar}>
                        <ul className={classes.navlist}>
                            {navLinks.map(navLink => {
                                let label;
                                if (navLink.label !== "Contact") {
                                    label = width > 1366 ? navLink.label : navLink.altLabel;
                                } else {
                                    label = <Button className={classes.navBut}>{navLink.label}</Button>;
                                }

                                return <li key={navLink.label} className={classes.navlistli}>
                                    <div className={classes.dropWrap}>
                                        <NavLink className={classes.navlink}
                                                 to={navLink.destination.pathname}
                                                 state={navLink.destination.state}> {label} </NavLink>
                                        {navLink.subLabel.length > 0 &&
                                            <ul key={navLink.label} className={classes.dropContent}>
                                                {width > 1366 && navLink.subLabel.map(sub => (
                                                    <li key={sub} className={classes.droplist}>
                                                        <NavLink className={classes.droplink} to=''>{sub}</NavLink>
                                                    </li>
                                                ))}
                                                {width < 1366 && navLink.altSubLabel.map(sub => (
                                                    <li key={sub} className={classes.droplist}>
                                                        <NavLink className={classes.droplink} to=''>{sub}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>}
                                    </div>
                                </li>;

                            })}
                        </ul>
                    </nav>
                    <div className={classes.burgerContainer}>
                        <Hamburger scrollState={scrollState}/>
                    </div>
                </div>
            </header>
        )
    }
;

export default Header;
