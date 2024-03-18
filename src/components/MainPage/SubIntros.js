import React from 'react';

import classes from './SubIntro.module.css'
import SubIntroCard from "./SubIntroCard";
import SubIntroImg1 from "../../assets/subintro_1.png";
import SubIntroImg2 from "../../assets/subintro_2.png";
import SubIntroImg3 from "../../assets/subintro_3.png";

const SubIntros = (props) => {

    const DUMMY_SUBINTRO = [
        {
            bkColor: "yellow",
            titleSub: "Professional",
            cntSub: "Chirogate merges chemistry and technology to lead in Prostaglandin API synthesis. Founded in 1999, we're known for our high standards and reliability.",
            img: SubIntroImg1
        },
        {
            bkColor: "",
            titleSub: "Teamwork",
            cntSub: "Our success is fueled by teamwork. Diverse experts unite to innovate and excel, making Chirogate a synthesis leader.",
            img: SubIntroImg2
        },
        {
            bkColor: "orange",
            titleSub: "Extraordinary",
            cntSub: "Chirogate offers the purest Prostaglandin APIs, setting new industry standards with our unmatched expertise and compliance.",
            img: SubIntroImg3
        }
    ]

    return (
        <div className={classes.subIntroContainer}>
            {
                DUMMY_SUBINTRO.map(subintro => (
                    <SubIntroCard
                        key={subintro.titleSub}
                        bkColor={subintro.bkColor}
                        title={subintro.titleSub}
                        content={subintro.cntSub}
                        img={subintro.img}
                    />
                ))
            }
        </div>
    )
};

export default SubIntros;
