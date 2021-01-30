import React from 'react';
import {useHistory} from "react-router-dom";

export default function About() {
    let history = useHistory();

    function backToHome(){
        history.push("/")
    }

    return (
        <div>
            <i class="fas fa-arrow-circle-left fa-2x" onClick={backToHome}></i>
            <h2>À propos</h2>
        </div>
    )
}
