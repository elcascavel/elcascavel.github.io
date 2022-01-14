import React from "react";
import { Suspense } from "react";
import { Container } from "react-bootstrap";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => { 
    return (
    <Suspense fallback="Loading...">
        <Container fluid>
        <Navigation/>
        <About/>
        <Projects/>
        <Footer/>
        </Container>
    </Suspense>
    );
};
export default App;