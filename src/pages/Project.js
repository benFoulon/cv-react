import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

export default function () {
    let history = useHistory();

    function backToHome(){
        history.push("/")
    }

    const[isFlipped, setIsFlipped] = useState("false")
    const toogleFlip =() =>{
        setIsFlipped(!isFlipped)
    }

    return (
        <div>
            <i className="fas fa-arrow-circle-left fa-2x" onClick={backToHome}></i>
            <h2>Projets</h2>
            <div className="containeur containeur--dark project__box" id="projects">
                <div className="project__caroussel scrolling-wrapper">
                    <div class="card">
                        <div class={`card__inner ${isFlipped ? "": "is-flipped"}`} onClick={toogleFlip} >
                            <div class="card__face card__face--front showtrack">
                                <h2>Projet Showtrack</h2>
                            </div>
                            <div class="card__face card__face--back">
                                <div class="card__body">
                                    <h3>Showtrack</h3>
                                    <p>Reproduction d'une page de blog en HTML/CSS, responsive</p>
                                    <p><a target="_blank" className="linkSite" href="https://showtrackproject.netlify.app">Voir le site</a></p>
                                    <a target="_blank" className="linkGithub" href="https://github.com/benFoulon/showtrack">Voir le code source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class={`card__inner ${isFlipped ? "": "is-flipped"}`} onClick={toogleFlip}>
                            <div class="card__face card__face--front wordpress">
                                <h2>Wordpress Heddy Lamar</h2>
                            </div>
                            <div class="card__face card__face--back">
                                <div class="card__body">
                                    <h3>Hedy Lamar</h3>
                                    <p>Création et mise en ligne d'un projet Wordpress pour ma promo chez Popschool</p>
                                    <a target="_blank" className="linkSite" href="http://5.196.224.123/wordpress/">Voir le site</a><br></br>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class={`card__inner ${isFlipped ? "": "is-flipped"}`} onClick={toogleFlip}>
                            <div class="card__face card__face--front portfolio">
                                <h2>Portfolio personnel</h2>
                            </div>
                            <div class="card__face card__face--back">
                                <div class="card__body">
                                    <h3>Portfolio</h3>
                                    <p>Création d'un CV/portfolio en HTML/CSS, responsive</p>
                                    <p><a target="_blank" className="linkSite" href="https://benjamin-foulon.netlify.app">Voir le site</a></p>
                                    <a target="_blank" className="linkGithub" href="https://github.com/benFoulon/cv_benjamin">Voir le code source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class={`card__inner ${isFlipped ? "": "is-flipped"}`} onClick={toogleFlip}>
                            <div class="card__face card__face--front quote-generator">
                                <h2>Chuck Norris facts</h2>
                            </div>
                            <div class="card__face card__face--back">
                                <div class="card__body">
                                    <h3>Chuck Norris facts</h3>
                                    <p>Création d'un generateur de phrase</p>
                                    <p><a target="_blank" className="linkSite" href="https://chucknorris-fact-benfoul.netlify.app/">Voir le site</a></p>
                                    <a target="_blank" className="linkGithub" href="https://github.com/benFoulon/chuck-norris-fact">Voir le code source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class={`card__inner ${isFlipped ? "": "is-flipped"}`} onClick={toogleFlip}>
                            <div class="card__face card__face--front weather-app">
                                <h2>Application météo</h2>
                            </div>
                            <div class="card__face card__face--back">
                                <div class="card__body">
                                    <h3>Application météo</h3>
                                    <p>Création d'une application météo en utilisant ReactJS et l'API OpenWeather</p>
                                    <p><a target="_blank" className="linkSite" href="https://weather-app-benfoul.netlify.app/">Voir le site</a></p>
                                    <a target="_blank" className="linkGithub" href="https://github.com/benFoulon/react-weather-api">Voir le code source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class={`card__inner ${isFlipped ? "": "is-flipped"}`} onClick={toogleFlip}>
                            <div class="card__face card__face--front calculator">
                                <h2>Calculatrice</h2>
                            </div>
                            <div class="card__face card__face--back">
                                <div class="card__body">
                                    <h3>Calculatrice</h3>
                                    <p>Création d'une calculatrice en JavaScript</p>
                                    <p><a target="_blank" className="linkSite" href="https://js-calculator-benfoul.netlify.app/">Voir le site</a></p>
                                    <a target="_blank" className="linkGithub" href="https://github.com/benFoulon/calculator">Voir le code source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class={`card__inner ${isFlipped ? "": "is-flipped"}`} onClick={toogleFlip}>
                            <div class="card__face card__face--front todo-list">
                                <h2>To do List</h2>
                            </div>
                            <div class="card__face card__face--back">
                                <div class="card__body">
                                    <h3>To do List</h3>
                                    <p>Création d'une to do list dinamyque en React Native</p>
                                    <a target="_blank" className="linkGithub" href="https://github.com/benFoulon/to-do-list">Voir le code source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
