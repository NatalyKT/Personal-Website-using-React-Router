import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Error from "./Error.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
