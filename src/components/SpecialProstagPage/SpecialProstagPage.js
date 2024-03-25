import React from 'react';
import useScrollToSection from "../hooks/useScrollToSection";

import classes from './SpecialProstagPage.module.css'
import logoImg from "../../assets/logo_img.png";
import d1Img from "../../assets/special/d1.png";
import d2Img from "../../assets/special/d2.png";
import d3Img from "../../assets/special/d3.png";
import d4Img from "../../assets/special/d4.png";
import d5Img from "../../assets/special/d5.png";
import d6Img from "../../assets/special/d6.png";
import PageTemplate from "../UI/PageTemplate";

const SpecialProstagPage = (props) => {
    const TITLE = "Special Intermediates Prostaglandins analogs";
    const DUMMY_CNT = [
        {
            id: 0,
            title: "Cyclopentenone (CP-1) for E2 & F2 series Prostaglandin analogs",
            img: {src: d1Img, alt: 'CP1 for E2&F2 series'},
        },
        {
            id: 1,
            title: "Cyclopentenone (CP-2) for Benzindene Prostaglandin (Treprostinil)",
            img: {src: d2Img, alt: 'CP2 for Benzindene Prostaglandin'},
        },
        {
            id: 2,
            title: "Cyclopentenone (CP-3) for Benzoprostacyclin (Beraprost)",
            img: {src: d3Img, alt: 'CP-3 for Benzoprostacyclin'},
        },
        {
            id: 3,
            title: "Cyclopentenone (CP-4) for Carbaprostacyclin (Iloprost)",
            img: {src: d4Img, alt: 'CP-4 for Carbaprostacyclin'},
        },
        {
            id: 4,
            title: "Intermediate for Isomer Free Latanoprost & Latanoprostene Bunod",
            img: {src: d5Img, alt: 'For Isomer Free Latan Bunod'},
        },
        {
            id: 5,
            title: "Intermediate for Isomer Free Travoprost",
            img: {src: d6Img, alt: 'For Isomer Free Travoprost'},
        },

    ];
    const {createRef} = useScrollToSection();

    return (
        <PageTemplate title={TITLE}>
            {DUMMY_CNT.map((cnt, index) => {

                const sectionId = `section${index + 1}`;

                return (
                    <section className={classes.abtCard} key={sectionId} ref={createRef(sectionId)} id={sectionId}>
                        <div className={classes.abtTitle}>
                            <img className={classes.ttlImg} src={logoImg} alt="Chirogate in About."/>
                            <h3>{cnt.title}</h3>
                        </div>
                        <div className={classes.abtCnt}>
                            <img src={cnt.img.src} alt={cnt.img.alt}/>
                        </div>

                    </section>
                )

            })}
        </PageTemplate>
    )
};

export default SpecialProstagPage;
