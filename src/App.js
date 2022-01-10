import React from "react";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
    return ( <div className="parentWrapper">
        <Navigation/>
        <About/>
        <Projects/>
        <Footer/>
        </div>
    );
};
export default App;