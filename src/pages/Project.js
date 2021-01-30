import React from 'react';
import {useHistory} from "react-router-dom";

export default function () {
    let history = useHistory();

    function backToHome(){
        history.push("/")
    }

    return (
        <div>
            <i class="fas fa-arrow-circle-left fa-2x" onClick={backToHome}></i>
            <h2>Projets</h2>
        </div>
    )
}
