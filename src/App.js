import React from "react";
import { Suspense } from "react";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => { 
    return (
    <Suspense fallback="Loading...">
        <Navigation/>
        <About/>
        <Projects/>
        <Footer/>
    </Suspense>
    );
};
export default App;