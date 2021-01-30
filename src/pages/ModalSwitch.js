import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Components
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact"

export default function ModalSwitch() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" children={<Home />} />
                <Route path="/about" children={<About />} />
                <Route path="/experience" children={<Experience />} />
                <Route path="/project" children={<Project />} />
                <Route path="/skill" children={<Skill />} />
                <Route path="/contact" children={<Contact />} />
            </Switch>
        </Router>
    );
}

