import React from "react";
import { Suspense } from "react";
import Navigation from "./shared/components/Navigation";
import About from "./shared/components/About";
import Projects from "./shared/components/Projects";
import Experience from "./shared/components/Experience";

import "./index.css";
import "./fontawesome";

function App() { 
    return (
      <Suspense fallback="Loading...">
        <div className="space-y-6">
        <Navigation/>
        <About/>
        <Projects/>
        <Experience/>
        </div>
      </Suspense>
    );
};
export default App;