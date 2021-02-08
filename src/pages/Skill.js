import React from 'react';
import {useHistory} from "react-router-dom";

export default function Skill() {
    let history = useHistory();

    function backToHome(){
        history.push("/")
    }

    return (
        <div>
            <i class="fas fa-arrow-circle-left fa-2x" onClick={backToHome}></i>
            <h2>Compétences</h2>
            <div class="containeur containeur--white" id="skills">
                <div class="skill__box">
                    <div class="skill__box--logo skill__box--html">
                    <i class="fab fa-html5 fa-10x" style={{color:'#e34c24'}}></i>
                    <p class="skill__box skill__box--quote">HTML5</p>
                    </div>
                    <div class="skill__box--logo skill__box--css">
                    <i class="fab fa-css3-alt fa-10x" style={{color:'#619ae7'}}></i>
                    <p class="skill__box skill__box--quote">CSS3</p>
                    </div>
                    <div class="skill__box--logo skill__box--python">
                    <i class="fab fa-python fa-10x" style={{color:'#366d9c'}}></i>
                    <p class="skill__box skill__box--quote">Python</p>
                    </div>
                    <div class="skill__box--logo skill__box--js">
                    <i class="fab fa-js fa-10x" style={{color:'#efd81d'}}></i>
                    <p class="skill__box skill__box--quote">JavaScript</p>
                    </div>
                    <div class="skill__box--logo skill__box--js">
                    <i class="fab fa-react fa-9x" style={{color:'#53c1de'}}></i>
                    <p class="skill__box skill__box--quote">ReactJS</p>
                    </div>
                    <div class="skill__box--logo skill__box--php">
                    <i class="fab fa-php fa-9x" style={{color:'#7377ad'}}></i>
                    <p class="skill__box skill__box--quote quote__language">PHP</p>
                    </div>
                    <div class="skill__box--logo skill__box--php">
                    <i class="fab fa-symfony fa-9x" style={{color:'#7377ad'}}></i>
                    <p class="skill__box skill__box--quote quote__language">Symfony</p>
                    </div>
                    <div class="skill__box--logo skill__box--wp">
                    <i class="fab fa-wordpress-simple fa-9x" style={{color:'#444444'}}></i>
                    <p class="skill__box skill__box--quote quote__language">Wordpress</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
