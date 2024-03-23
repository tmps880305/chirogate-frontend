import React, {useEffect, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import classes from './AboutPage.module.css'
import SubIntroImg1 from "../../assets/subintro_1.png";
import SubIntroImg2 from "../../assets/subintro_2.png";
import SubIntroImg3 from "../../assets/subintro_3.png";
import abtBanner from "../../assets/banner.png";
import logoImg from '../../assets/logo_img.png';

const AboutPage = (props) => {
    const DUMMY_FACILITIES = [{
        id: 1, img: SubIntroImg1
    }, {
        id: 2, img: SubIntroImg2
    }, {
        id: 3, img: SubIntroImg3
    },]
    const location = useLocation();
    const navigate = useNavigate();
    const section1Ref = useRef(null); // Create a ref for the target section

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'}); // Smoothly scroll to the target section

            /*
                Scroll back slightly to make better position for viewing.
                Timeout could not be too short, or the function will fail to scroll.
                Might be influence by loading time.
            */
            setTimeout(() => window.scrollBy(0, -100), 400);
        }

    };

    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;

            switch (sectionId) {
                case 'section1':
                    scrollToSection(section1Ref);
                    break;
                default:
                    break;
            }
        }

        // Clear location state after scrolled once
        if (Object.keys(location.state).length > 0) {
            navigate(location.pathname, {replace: true, state: {}});
        }
    }, [location, navigate]);

    return (<div className={classes.abt}>
        <img src={abtBanner} alt="Chirogate office view"/>
        <div className={classes.abtContainer}>
            <section className={classes.abtCard} ref={section1Ref} id="section1">
                <div className={classes.abtTitle}>
                    <img className={classes.ttlImg} src={logoImg} alt="Chirogate in About."/>
                    <h3>About us</h3>
                </div>
                <p>Chirogate was founded by a group of chemists and technology professionals in 1999. With the
                    strong
                    background and advantages in both chemistry and technology, we devote ourselves to the
                    chemical
                    synthesis of Prostaglandin APIs, the group of products which require long reaction steps and
                    considerable efforts in controlling the multi-chirality of the compound.

                    Owing to our proprietary patented processes and cutting-edge technology platforms, our major
                    prostaglandin products are of the highest purity in the market and are incompliance with
                    major
                    Pharmacopoeias, including USP, EP, JP, KP, etc.

                    Chirogate is a company driven by the ambition to pursue both the best product quality and
                    the
                    highest
                    customer satisfaction. Our continuous dedication to innovation, quality and service has long
                    served
                    as
                    the fundamental of our company culture for more than 20 years and will surely be the same
                    for
                    the
                    years
                    to come.</p>
            </section>
            <section className={classes.abtCard} ref={section1Ref} id="section2">
                <div className={classes.abtTitle}>
                    <img className={classes.ttlImg} src={logoImg} alt="Chirogate in About."/>
                    <h3>GMP Compliant History</h3>
                </div>
                <ul>
                    <li>First TFDA Inspections in 2005</li>
                    <li>US FDA Inspections in 2006, 2010, 2014, 2018</li>
                    <li>20+ follow-up Inspections by TFDA</li>
                    <li>Other Authorities: PMDA(2016, 2023) , COFEPRIS (2013)</li>
                    <li>Frequent Customer Audits and QP Audits</li>
                </ul>
            </section>
            <section className={classes.abtCard} ref={section1Ref} id="section3">
                <div className={classes.abtTitle}>
                    <img className={classes.ttlImg} src={logoImg} alt="Chirogate in About."/>
                    <h3>Facilities</h3>
                </div>
                <div className={classes.abtFac}>
                    {DUMMY_FACILITIES.map(fac => (<img key={fac.id} src={fac.img} alt="Introduction"/>))}
                </div>
            </section>
        </div>
    </div>)
};

export default AboutPage;
