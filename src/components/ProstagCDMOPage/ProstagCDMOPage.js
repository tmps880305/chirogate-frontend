import React, {useCallback, useEffect, useState} from 'react';

import classes from './ProstagCDMOPage.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import abtBanner from "../../assets/banner.png";
import logoImg from "../../assets/logo_img.png";
import c3Img from "../../assets/cdmo/c3.png";

const ProstagCDMOPage = (props) => {
        const DUMMY_CNT = [
            {
                id: 0,
                title: "Crystalline form Development",
                content: {
                    ths: [
                        'Special Crystalline Form',
                        'CAS No.',
                        'XRPD',
                        'DSC',
                        'Inventive Step',
                        'Reference'
                    ],
                    tds: [
                        [
                            'Treprostinil anhydrous crystalline Form I',
                            '81846-19-7',
                            '3.1±0.2°',
                            '124+5°C',
                            'low viscosity',
                            'US11339110'
                        ],
                        [
                            'Treprostinil monohydrate Form I',
                            '1173918-57-4',
                            '5.43±0.2°, and 10.87±0.2°',
                            '79.2±2°C and 125.1±2°C',
                            'low viscosity',
                            'US11447440'
                        ],
                        [
                            'Treprostinil monohydrate Form II',
                            '1173918-57-4',
                            '5.19±0.2°, and 10.40±0.2°',
                            '73.8±2°C and 125.1±2°C',
                            'low viscosity',
                            'US11447440'
                        ],
                        [
                            'Hexadecyl Treprostinil crystalline Form I',
                            '1706528-83-7',
                            '3.3±0.2°, 6.6±0.2°, 14.2±0.2°, 18.9±0.2°, 21.3±0.2°, and 22.5±0.2°',
                            '54.5±1°C',
                            'low viscosity',
                            'US10781160'
                        ],
                        [
                            'Hexadecyl Treprostinil crystalline Form II',
                            '1706528-83-7',
                            '3.4±0.2°, 6.1±0.2°, 9.4±0.2°, 20.3±0.2°, 21.6±0.2°, and 23.4±0.2°',
                            '56.9±1°C',
                            'low viscosity',
                            'US10781160'
                        ],
                        [
                            'Lubiprostone crystalline form VI',
                            '333963-40-9',
                            '7.5±0.2°, 10.3±0.2°, 13.9±0.2°, 18.7±0.2°, and 21.1±0.2°',
                            '50.7±1°C',
                            'Stability',
                            'US10253011'
                        ],
                        [
                            'Carboprost Tromethamine crystalline form',
                            '58551-69-2',
                            '6.9±0.2°, 10.3±0.2°, 18.8±0.2°, and 21.9±0.2°',
                            '106.4±1.0°C',
                            'Stability',
                            'TW111138222'
                        ],
                        [
                            'Beraprost-314d anhydrous crystalline Form II',
                            '94132-88-4',
                            '6.1±0.2°, 6.6±0.2°, 7.2±0.2°, 12.1±0.2°, and 16.3±0.2°',
                            '67.5±1°C',
                            'Stability',
                            'US10577340'
                        ],
                        [
                            'Beraprost-314d anhydrous crystalline Form III',
                            '94132-88-4',
                            '6.2±0.2°, 7.2±0.2°, 12.4±0.2°, 15.7±0.2°, and 19.3±0.2°',
                            '66.2±1°C',
                            'Stability',
                            'US10577340'
                        ],
                        [
                            'Beraprost-314d monohydrate',
                            '2411842-05-0',
                            '',
                            '',
                            'Stability',
                            'US10577341'
                        ],
                        [
                            'Beraprost-314d monohydrate Form A',
                            '2411842-05-0',
                            '6.1±0.2°, 12.1±0.2°, 13.9±0.2°, 16.9±0.2°, 19.4±0.2°, and 21.6±0.2°',
                            '55.4±1°C and 63.0±1°C',
                            'Stability',
                            'US10577341'
                        ],
                        [
                            'Beraprost-314d monohydrate Form B',
                            '2411842-05-0',
                            '6.5±0.2°, 13.0±0.2°, 18.2±0.2°, 19.0±0.2°, 20.1±0.2°, and 20.9±0.2°',
                            '56.4±1°C and 64.2±1°C',
                            'Stability',
                            'US10577341'
                        ]
                    ]
                },
                comment: 'Provide the most suitable and stable API forms.'
            },
            {
                id: 1,
                title: "Highest purity & quality Development",
                content: {
                    ths: [
                        'Ultra Pure PG',
                        'CAS No.',
                        'Special specification',
                        'Reference'
                    ],
                    tds: [
                        [
                            'latanoprost',
                            '130209-82-4',
                            'containing a non-detectable level of 5,6-trans isomer and 15-isomer',
                            'us10822321'
                        ],
                        [
                            'latanoprost acid',
                            '41639-83-2',
                            'containing less than 0.1% 5,6-trans isomer and less than 0.1% 15-isomer',
                            'us9994543'
                        ],
                        [
                            'travoprost acid',
                            '54276-17-4',
                            'containing less than 0.1%  5,6-trans isomer and  less than 0.1% 15-isomer',
                            'us9994543'
                        ],
                        [
                            'bimatoprost acid',
                            '38344-08-0',
                            'containing less than 0.1%  5,6-trans isomer',
                            'us9994543'
                        ],
                        [
                            'tafluprost  acid',
                            '209860-88-8',
                            'containing less than 0.1%  5,6-trans isomer',
                            'us9994543'
                        ],
                        [
                            'unoprostone',
                            '120373-36-6',
                            'containing less than 0.1%  5,6-trans isomer',
                            'us9994543'
                        ],
                        [
                            'treprostinil (crystal)',
                            '81846-19-7',
                            'containing less than 0.05% treprostinil ethyl ester and less than 0.05% treprostinil dimers',
                            'us11339110'
                        ]
                    ]
                },
                comment: 'Provide the most stable with high purity and quality of APIs.'
            },
            {
                id: 2,
                title: "Efficiency Process Development",
                content: 'Our CDMO services are based on offering competitive pricing and production flexibility with good manufacturing practices, thus driving the process development of the pharmaceutical industry.\n' +
                    '\n' +
                    'With the competitive prices we offer and the flexible production management we possess, our CDMO services aim to accelerate and enhance the process development in the pharmaceutical industry.\n' +
                    'Instead of using Corey Lactone as the starting material to synthesize Prostaglandins, which not only requires massive numbers of reaction steps and generate significantly quantities of by-products but also increases the cost of production and purification, Chirogate, as shown in the below-listed chart, develops the conjugate addition and intramolecular cycling approaches to producing the most suitable cyclopentenone so as to manufacture different series of Prostaglandins quickly and efficiently.\n' +
                    'First, “the stereochemical well-defined w-side chain” is introduced through the conjugate addition.\n' +
                    'Second, the functional group is converted on C9. Finally, the intramolecular cycling reaction is conducted to obtain various series of cyclopentenone. With the above-mentioned steps, the production cost for all series of Prostaglandin is tremendously reduced.',
                img: {src: c3Img, alt: 'Conjugate Addition & Intramolecular Cyclization Approach.'},
                comment: ''
            },
            {
                id: 3,
                title: "Supply of Impurity & related substance",
                content: '',
                comment: ''
            }
        ]

        const location = useLocation();
        const navigate = useNavigate();
        const [sectionRefs, setSectionRefs] = useState({});
        const [readySections, setReadySections] = useState({});

        // Function to create ref dynamically
        const createRef = useCallback((sectionId) => {
            return (element) => {
                if (element && !sectionRefs[sectionId]) {
                    setSectionRefs((prevRefs) => ({
                        ...prevRefs,
                        [sectionId]: element // Directly store the DOM element
                    }));
                    setReadySections((prev) => ({...prev, [sectionId]: true})); // Mark as ready
                }
            };
        }, [sectionRefs]);

        useEffect(() => {
            const scrollToSection = (sectionId) => {
                const ref = sectionRefs[sectionId];
                if (ref) {
                    ref.scrollIntoView({behavior: 'smooth'});
                    /*
                    Scroll back slightly to make better position for viewing.
                    Timeout could not be too short, or the function will fail to scroll.
                    Might be influence by loading time.
                    */
                    setTimeout(() => window.scrollBy({top: -100, behavior: 'smooth'}), 500);
                }
            };


            if (location.state?.scrollTo && readySections[location.state.scrollTo]) {
                scrollToSection(location.state.scrollTo);

                // clear location state
                navigate(location.pathname, {replace: true, state: {}});
            }
        }, [location, navigate, sectionRefs, readySections]);


    const banner =
        <div className={classes.abtBannerWrap}>
            <div className={classes.abtBannerTtl}>
                <h2>Prostaglandins API CDMO Services</h2>
            </div>
            <img src={abtBanner} alt="Chirogate office view"/>
        </div>;

        return (
            <div className={classes.abt}>
                {banner}
                <div className={classes.abtContainer}>
                    {DUMMY_CNT.map((cnt, index) => {

                        const sectionId = `section${index + 1}`;
                        let contentToShow = '';

                        if (index === 0 || index === 1) {
                            contentToShow =
                                <table className={classes.abtTable}>
                                    <thead>
                                    <tr key={`tr-th`}>
                                        {cnt.content.ths.map((th, index) => (
                                            <th key={`th-${index}`}>{th}</th>
                                        ))}
                                    </tr>
                                    {cnt.content.tds.map((td, index) => (
                                        <tr key={`tr-${index}`}>
                                            {td.map((tcnt, index) => (
                                                <td key={`li-${index}`}>{tcnt}</td>
                                            ))}
                                        </tr>
                                    ))}
                                    </thead>
                                </table>
                        } else if (index === 2) {
                            contentToShow =
                                <div className={classes.effSection}>
                                    <p>{cnt.content}</p>
                                    <img src={cnt.img.src} alt={cnt.img.alt}/>
                                </div>
                        } else {
                            contentToShow =
                                <div className={classes.suppSection}>
                                    <h4>To be updated ...</h4>
                                </div>
                        }

                        return (
                            <section className={classes.abtCard} key={sectionId} ref={createRef(sectionId)} id={sectionId}>
                                <div className={classes.abtTitle}>
                                    <img className={classes.ttlImg} src={logoImg} alt="Chirogate in About."/>
                                    <h3>{cnt.title}</h3>
                                </div>
                                <div className={classes.abtCnt}>
                                    <p>{cnt.comment}</p>

                                    {contentToShow}

                                </div>

                            </section>
                        )

                    })}
                </div>
            </div>
        )
    }
;

export default ProstagCDMOPage;
