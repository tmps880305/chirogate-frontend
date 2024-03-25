import React, {useCallback, useEffect, useState} from 'react';

import classes from './ProstagAPIPage.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import abtBanner from "../../assets/banner.png";
import logoImg from "../../assets/logo_img.png";

const ProstagAPIPage = (props) => {
    const DUMMY_CNT = [
        {
            id: 0,
            title: "Prostaglandin API for Anti-Glaucoma",
            content: {
                ths: [
                    'API',
                    'CAS No.',
                    '',
                    'Brand name',
                    'Originator',
                    'Purity',
                    'Regulatory Filing'
                ],
                tds: [
                    [
                        'Bimatoprost',
                        '155206-00-1',
                        [],
                        ['Lumigan', 'Durysta', 'Latisse'],
                        ['Abbvie'],
                        '> 99.5%',
                        ['USDMF', 'ASMF', 'India', 'Brazil']
                    ],
                    [
                        'Latanoprost',
                        '130209-82-4',
                        [],
                        ['Xalatan', 'Xelpros', 'Iyuzeh'],
                        ['Pfizer', 'Sun Pharm', 'Thea Pharm'],
                        '> 97.0%',
                        ['USDMF', 'ASMF', 'JDMF', 'China', 'India', 'Other Countries']
                    ],
                    [
                        'Latanoprost (Isomer Free)',
                        '130209-82-4',
                        [],
                        ['Xalatan', 'Xelpros', 'Iyuzeh'],
                        ['Pfizer', 'Sun Pharm', 'Thea Pharm'],
                        '> 99.95%*',
                        ['USDMF', 'CEP', 'JDMF', 'India', 'Brazil', 'Other Countries']
                    ],
                    [
                        'Latanoprostene Bunod',
                        '860005-21-6',
                        [],
                        ['Vyzulta'],
                        ['Bausch+Lomb'],
                        '> 99.9%*',
                        ['USDMF', 'KDMF'],
                    ],
                    [
                        'Tafluprost',
                        '209860-87-7',
                        [],
                        ['Taflotan', 'Zioptan'],
                        ['Santen', 'Merck/THEA'],
                        '> 99.9%*',
                        ['USDMF', 'ASMF', 'JDMF', 'KDMF', 'China', 'India']
                    ],
                    [
                        'Travoprost',
                        '157283-68-6',
                        [],
                        ['Travatan Z'],
                        ['Novartis'],
                        '> 97.0%',
                        ['USDMF', 'ASMF', 'Other Countries']
                    ],
                    [
                        'Travoprost (Isomer Free)',
                        '157283-68-6',
                        [],
                        ['Travatan Z'],
                        ['Novartis'],
                        '> 99.9%*',
                        ['USDMF', 'China', 'Brazil', 'Other Countries']
                    ],
                    [
                        'Unoprostone Isopropyl',
                        '120373-24-2',
                        [],
                        ['Rescula'],
                        ['Sucampo'],
                        '> 99.9%',
                        ['USDMF']
                    ]
                ],
            },
            comment: '* The Best Product with the Highest purity available in the market'
        },
        {
            id: 1,
            title: "PG API for Pulmonary Arterial Hypertension (PAH)",
            content: {
                ths: [
                    'API',
                    'CAS No.',
                    '',
                    'Brand name',
                    'Originator',
                    'Purity',
                    'Regulatory Filing'
                ],
                tds: [
                    [
                        'Treprostinil',
                        '81846-19-7',
                        [],
                        ['Remodulin', 'Tyvaso', 'Tyvaso DPI'],
                        ['United', 'Therapeutics'],
                        '> 99.9%',
                        ['USDMF', 'ASMF', 'China', 'Other Countries']
                    ],
                    [
                        'Treprostinil Monohydrate',
                        '1173918-57-4',
                        [],
                        ['Remodulin', 'Tyvaso', 'Tyvaso DPI'],
                        ['United', 'Therapeutics'],
                        '> 99.9%',
                        ['-']
                    ],
                    [
                        'Treprostinil Sodium',
                        '289480-64-4',
                        [],
                        ['Remodulin'],
                        ['United', 'Therapeutics'],
                        '> 99.9%',
                        ['USDMF']
                    ],
                    [
                        'Treprostinil Diethanolamine',
                        '830354-48-8',
                        [],
                        ['Orenitram'],
                        ['United', 'Therapeutics'],
                        '> 99.9%',
                        ['USDMF']
                    ],
                    [
                        'Iloprost',
                        '78919-13-8',
                        [],
                        ['Ventavis', 'Ilomedin'],
                        ['Actelion', 'Bayer'],
                        '> 97.5% ',
                        ['-']
                    ],
                    [
                        'Epoprostenol Sodium',
                        '61849-14-7',
                        [],
                        ['Flolan'],
                        ['GSK'],
                        '> 99.0%',
                        ['-']
                    ]

                ],
            },
            comment: ''
        },
        {
            id: 2,
            title: "PG API for Other Indications",
            content: {
                ths: [
                    'API',
                    'CAS No.',
                    'Indication',
                    'Brand name',
                    'Originator',
                    'Purity',
                    'Regulatory Filing',
                ],
                tds: [
                    [
                        'Alprostadil',
                        '745-65-3',
                        ['Vasodilator'],
                        ['Caverject', 'Edex', 'Muse'],
                        ['Pfizer', 'Auxilium', 'Mylan'],
                        '> 98.0%',
                        ['India'],
                    ],
                    [
                        'Beraprost Sodium',
                        '88475-69-8',
                        ['Antithrombotic'],
                        ['Dorner', 'Procylin'],
                        ['Astellas', 'Kaken'],
                        '> 98.5%',
                        ['KDMF'],
                    ],
                    [
                        'Carboprost Tromethamine',
                        '58551-69-2',
                        ['Oxytocic'],
                        ['Hemabate'],
                        ['Pfizer'],
                        '> 99.0%',
                        ['USDMF', 'China', 'CEP'],
                    ],
                    [
                        'Dinoprostone',
                        '363-24-6',
                        ['Oxytocic', 'Abortifacient'],
                        ['Cervidil', 'Prepidil'],
                        ['Ferring', 'Pfizer'],
                        '> 97.0%',
                        ['USDMF', 'India'],
                    ],
                    [
                        'Limaprost Alfadex',
                        '88852-12-4',
                        ['Ischemic Symptoms'],
                        ['Opalmon'],
                        ['Ono'],
                        '> 97.0%',
                        ['-'],
                    ],
                    [
                        'Limaprost',
                        '74397-12-9',
                        ['Ischemic Symptoms'],
                        ['Opalmon'],
                        ['Ono'],
                        '> 97.0%',
                        ['-'],
                    ],
                    [
                        'Lubiprostone',
                        '136790-76-6',
                        ['Chronic Constipation'],
                        ['Amitiza'],
                        ['Takeda'],
                        '> 99.0%',
                        ['USDMF', 'KDMF'],
                    ],
                    [
                        'Lubiprostone',
                        '333963-40-9',
                        ['Chronic Constipation'],
                        ['Amitiza'],
                        ['Sucampo'],
                        '> 99.0%',
                        ['USDMF', 'KDMF'],
                    ],
                    [
                        'Misoprostol',
                        '59122-46-2',
                        ['Antiulcer, Oxytocic'],
                        ['Cytotec Arthrotec'],
                        ['Searle', 'Pfizer'],
                        '> 98.5%',
                        ['KDMF', 'Canada'],
                    ]
                ],
            },
            comment: ''
        },
        {
            id: 3,
            title: "PG API for Pulmonary Arterial Hypertension (PAH)",
            content: {
                ths: [
                    'API',
                    'CAS No.',
                    '',
                    'Brand name',
                    'Originator',
                    'Purity',
                    'Regulatory Filing'
                ],
                tds: [
                    [
                        'Dinoprost',
                        '551-11-1',
                        [],
                        ['Enzaprost'],
                        ['Ceva'],
                        '> 98.0%',
                        ['GMP certificate']
                    ],
                    [
                        'Dinoprost Tromethamine',
                        '38562-01-5',
                        [],
                        ['Lutalyse'],
                        ['Zoetis'],
                        '> 97.0%',
                        ['GMP certificate', 'CEP']
                    ],
                    [
                        'Cloprostenol Sodium',
                        '55028-72-3',
                        [],
                        ['Estrumate'],
                        ['Merck'],
                        '> 98.0%',
                        ['GMP certificate']
                    ]
                ]
            },
            comment: ''
        }

    ];
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
                <h2>Prostaglandins API’s</h2>
            </div>
            <img src={abtBanner} alt="Chirogate office view"/>
        </div>;

    return (
        <div className={classes.abt}>
            {banner}
            <div className={classes.abtContainer}>
                {DUMMY_CNT.map((cnt, index) => {

                    const sectionId = `section${index + 1}`;

                    return (
                        <section className={classes.abtCard} key={sectionId} ref={createRef(sectionId)} id={sectionId}>
                            <div className={classes.abtTitle}>
                                <img className={classes.ttlImg} src={logoImg} alt="Chirogate in About."/>
                                <h3>{cnt.title}</h3>
                            </div>
                            <div className={classes.abtCnt}>
                                <p>{cnt.comment}</p>
                                <table className={classes.abtTable}>
                                    <thead>
                                    <tr key={`tr-th`}>
                                        {cnt.content.ths.map((th, index) => (
                                            th !== '' && <th key={`th-${index}`}>{th}</th>
                                        ))}
                                    </tr>
                                    {cnt.content.tds.map((td, index) => (
                                        <tr key={`tr-${index}`}>
                                            {td.map((tcnt, index) => {
                                                if (index === 2 || index === 3 || index === 4 || index === 6) {
                                                    if (tcnt.length > 0) {
                                                        return <td key={`td-${index}`}>
                                                            <ul>
                                                                {tcnt.map((tc, index) => (
                                                                    <li key={`li-${index}`}>{tc}</li>
                                                                ))}
                                                            </ul>
                                                        </td>;
                                                    } else {
                                                        return null;
                                                    }
                                                } else {
                                                    return <td key={`li-${index}`}>{tcnt}</td>;

                                                }
                                            })}
                                        </tr>
                                    ))}
                                    </thead>
                                </table>
                            </div>

                        </section>
                    )

                })}
            </div>
        </div>
    )
};

export default ProstagAPIPage;
