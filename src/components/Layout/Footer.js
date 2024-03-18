import React from 'react';

import classes from './Footer.module.css';
import logoImg from '../../assets/logo_img.png';
import Button from "../UI/Button";
import FootNavigation from "./FootNavigation";

const Footer = (props) => {

    const DUMMY_FOOT_NAVI = [
        {
            title: 'About',
            contents: ['About us', 'GMP compliant history', 'Facilities']
        },
        {
            title: 'Prostaglandins API CDMO Services',
            contents: ['Anti-Glaucoma', 'Pulmonary Arterial Hypertension (PAH)', 'Other Indications', 'Veterinary Use']
        },
        {
            title: 'Prostaglandins API’s',
            contents: [
                'Crystalline form Development',
                'Highest purity & quality Development',
                'Efficiency Process Development',
                'Supply of Impurity & related substance'
            ]
        },
        {
            title: 'Cyclopentenone',
            contents: [
                'CP-1 - E2 & F2 series Prostaglandin analogs',
                'CP-2 - Benzindene Prostaglandin (Treprostinil)',
                'CP-3 - Benzoprostacyclin (Beraprost)',
                'CP-4 - Carbaprostacyclin (Iloprost)',
                'Isomer Free Latanoprost & Latanoprostene Bunod',
                'Isomer Free Travoprost']
        }
    ]

    return (
        <div className={classes.footer}>
            <div className={classes.footContainer}>
                <div className={classes.footTitleBar}>
                    <div className={classes.footLogo}>
                        <img src={logoImg} alt="This is a logo image."/>
                        <h2>Chirogate</h2>
                    </div>
                    <div className={classes.footBtn}>
                        <Button className={classes.footBtnDark}>Recruit</Button>
                        <Button>Contact</Button>
                    </div>
                </div>

                <div className={classes.footNavi}>
                    {DUMMY_FOOT_NAVI.map(nav => (
                        <FootNavigation
                            key={nav.title}
                            title={nav.title}
                            contents={nav.contents}
                        />
                    ))}
                </div>
                <div className={classes.copyright}>
                    <p>Copyright © 2024 CHIROGATE INTERNATIONAL INC. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
