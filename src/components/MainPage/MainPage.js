import React from 'react';

import classes from './MainPage.module.css'
import Landing from "./Landing";
import MainIntro from "./MainIntro";
import SubIntros from "./SubIntros";

const MainPage = (props) => {
    return (
        <>
            <Landing></Landing>
            <MainIntro></MainIntro>
            <SubIntros></SubIntros>
        </>
    )
};

export default MainPage;
