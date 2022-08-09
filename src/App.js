import React from "react";
import { Suspense } from "react";
import Navigation from "./components/Navigation";

function App() { 
    return (
      <Suspense fallback="Loading...">
        <Navigation/>
      </Suspense>
    );
};
export default App;