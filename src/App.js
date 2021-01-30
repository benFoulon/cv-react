import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ModalSwitch from "./pages/ModalSwitch";

function App() {
  return (
    <div className="App">
        <ModalSwitch />
    </div>
  );
}

export default App;
