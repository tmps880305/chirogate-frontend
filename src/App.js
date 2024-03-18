import './App.css';
import React from "react";


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/Pages/RootLayout";
import ErrorPage from "./components/Pages/ErrorPage";
import HomePage from "./components/Pages/HomePage";
import Products from "./components/Pages/Products";
import ProductDetail from "./components/Pages/ProductDetail";
import Contact from "./components/Pages/Contact";
import SpecialProstag from "./components/Pages/SpecialProstag";
import ProstagCDMO from "./components/Pages/ProstagCDMO";
import ProstagAPI from "./components/Pages/ProstagAPI";
import About from "./components/Pages/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            // {path: 'products', element: <Products/>},
            // {path: 'products/:productID', element: <ProductDetail/>},
            {path: 'about', element: <About/>},
            {path: 'prostagAPI', element: <ProstagAPI/>},
            {path: 'prostagCDMO', element: <ProstagCDMO/>},
            {path: 'specialProstag', element: <SpecialProstag/>},
            {path: 'contact', element: <Contact/>}
        ]
    },
]);


function App() {
    return <RouterProvider router={router}/>;
}

export default App;
