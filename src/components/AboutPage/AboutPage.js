import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import classes from './AboutPage.module.css'
import SubIntroImg1 from "../../assets/subintro_1.png";
import SubIntroImg2 from "../../assets/subintro_2.png";
import SubIntroImg3 from "../../assets/subintro_3.png";
import abtBanner from "../../assets/banner.png";
import logoImg from '../../assets/logo_img.png';

const AboutPage = (props) => {
        const DUMMY_CNT = [
            {
                id: 0,
                title: "About us",
                content: "Chirogate was founded by a group of chemists and technology professionals in 1999. With the strong background and advantages in both chemistry and technology, we devote ourselves to the chemical synthesis of Prostaglandin APIs, the group of products which require long reaction steps and considerable efforts in controlling the multi-chirality of the compound. Owing to our proprietary patented processes and cutting-edge technology platforms, our major prostaglandin products are of the highest purity in the market and are incompliance with major Pharmacopoeias, including USP, EP, JP, KP, etc. Chirogate is a company driven by the ambition to pursue both the best product quality and the highest customer satisfaction. Our continuous dedication to innovation, quality and service has long served as the fundamental of our company culture for more than 20 years and will surely be the same for the years to come."
            },
            {
                id: 1,
                title: "GMP Compliant History",
                items: [
                    "First TFDA Inspections in 2005",
                    "US FDA Inspections in 2006, 2010, 2014, 2018",
                    "20+ follow-up Inspections by TFDA",
                    "Other Authorities: PMDA(2016, 2023) , COFEPRIS (2013)",
                    "Frequent Customer Audits and QP Audits"
                ]
            },
            {
                id: 2,
                title: "Facilities",
                images: [{
                    id: 1, img: SubIntroImg1
                }, {
                    id: 2, img: SubIntroImg2
                }, {
                    id: 3, img: SubIntroImg3
                },]
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


        const banner = <img src={abtBanner} alt="Chirogate office view"/>;

        return (
            <div className={classes.abt}>
                {banner}
                <div className={classes.abtContainer}>
                    {DUMMY_CNT.map((cnt, index) => {
                        let cardCnt = "";
                        switch (cnt.id) {
                            case 0:
                                cardCnt = <p>{cnt.content}</p>;
                                break;
                            case 1:
                                cardCnt = <ul>
                                    {cnt.items.map((item, index) => (<li key={index}>{item}</li>))}
                                </ul>;
                                break;
                            case 2:
                                cardCnt = <div className={classes.abtFac}>
                                    {cnt.images.map(img => (
                                        <img key={img.id} src={img.img} alt={`Introduction ${img.id}`}/>
                                    ))}
                                </div>;
                                break;
                            default:
                                break;
                        }

                        const sectionId = `section${index + 1}`;

                        return (
                            <section className={classes.abtCard} key={sectionId} ref={createRef(sectionId)} id={sectionId}>
                                <div className={classes.abtTitle}>
                                    <img className={classes.ttlImg} src={logoImg} alt="Chirogate in About."/>
                                    <h3>{cnt.title}</h3>
                                </div>
                                <div className={classes.abtCnt}>
                                    {cardCnt}
                                </div>
                            </section>
                        )

                    })}
                </div>
            </div>)
    }
;

export default AboutPage;
