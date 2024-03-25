import React from 'react';
import useScrollToSection from '../hooks/useScrollToSection';
import classes from "./PageTemplate.module.css";
import Banner from "./Banner";


const PageTemplate = (props) => {
    const sectionId = 'section0';
    const {createRef} = useScrollToSection({defaultBlock: 'start'});

    return (
        <div className={classes.abt} ref={createRef(sectionId)} id={sectionId}>
            <Banner>{props.title}</Banner>
            <div className={classes.abtContainer}>
                {props.children}
            </div>
        </div>
    )

};

export default PageTemplate;
