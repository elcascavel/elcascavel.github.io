import React from "react";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
    return ( <>
        <Navigation/>
        <About/>
        <Projects/>
        <Footer/>
        </>
    );
};
export default App;