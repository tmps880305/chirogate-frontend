import React from 'react';

import classes from './Footer.module.css';
import logoImg from '../../assets/logo_img.png';
import Button from "../UI/Button";
import FootNavigation from "./FootNavigation";
import useWindowSize from "../hooks/use-windowsize";

const Footer = (props) => {
    const {width} = useWindowSize();

    const navLinks = [
        {
            label: {
                main: "About us", alt: "About us", dest: "about"
            },
            subLabel: [{
                main: "About us", alt: "About us", state: {scrollTo: 'section1'}
            }, {
                main: "GMP Compliant History", alt: "History", state: {scrollTo: 'section2'}
            }, {
                main: "Facilities", alt: "Facilities", state: {scrollTo: 'section3'}
            }]
        }, {
            label: {
                main: "Prostaglandins API’s", alt: "Prost API", dest: "prostagAPI"
            },
            subLabel: [{
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

        }

    ];

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
                            {navLinks.map((nav, index) => (
                                <FootNavigation
                                    key={index}
                                    // title={nav.title}
                                    // contents={nav.contents}
                                    nav={nav}
                                />
                            ))}
                        </div>
                    </>}
                <div className={classes.copyright}>
                    <p>Copyright © 2024 CHIROGATE INTERNATIONAL INC. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
