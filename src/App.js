import React from "react";
import { Suspense } from "react";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

const App = () => {
    const {t} = useTranslation();
    
    return (
    <Suspense fallback="Loading...">
    <div className="parentWrapper">
        <Navigation/>
        <About/>
        <Projects/>
        <Footer/>
        </div>
    </Suspense>
    );
};
export default App;