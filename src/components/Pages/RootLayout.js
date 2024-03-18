import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const RootLayout = () => {
    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
};
export default RootLayout;
