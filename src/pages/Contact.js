import React from 'react';
import {useHistory} from "react-router-dom";

export default function () {
    let history = useHistory();

    function backToHome(){
        history.push("/")
    }

    return (
        <div>
            <i className="fas fa-arrow-circle-left fa-2x" onClick={backToHome}></i>
            <h2>Contact</h2>
            <div className="containeur" id="contact">
                <div className="contact__box">
                    <div className="contact__desktop">
                        <div className="contact__infos">
                            <div className="contact__logo">
                                <div className="contact__infos contact__infos--logo contact__infos--localisation">
                                    <i className="fas fa-map-marker-alt fa-1x"></i>
                                    <p>Avion(62)</p>
                                </div> 
                                <div className="contact__infos contact__infos--logo contact__infos--license">
                                    <i className="far fa-address-card fa-1x"></i>
                                    <p>Permis B</p>
                                </div>
                                <div className="contact__infos contact__infos--logo contact__infos--car">
                                    <i className="fas fa-car fa-1x"></i>
                                    <p>Véhicule</p>
                                </div>
                            </div>
                            <div className="contact__infos contact__infos--social">
                                <a href="https://www.facebook.com/benfoul20/" target="_blank" className="contact__infos--link"><i className="fab fa-facebook-square fa-3x"></i></a>
                                <a href="https://fr.linkedin.com/" target="_blank" className="contact__infos--link"><i className="fab fa-linkedin fa-3x"></i></a>
                                <a href="mailto:benjamin@gmail.com" target="_blank" className="contact__infos--link"><i className="fas fa-envelope-square fa-3x"></i></a>
                                <a href="https://github.com/benFoulon" target="_blank" className="contact__infos--link"><i className="fab fa-github-square fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="contact__form contact__form--box">
                        <form action="" method="POST" netlify>
                            <div className="contact__form contact__form--content contact__form--name">
                                <label htlmlFor="name">Nom et prénom</label>
                                <input type="text"  id="name" placeholder="Entrez votre nom et prénom"></input>
                            </div>
                            <div className="contact__form contact__form--content contact__form--mail">
                                <label htlmlFor="mail">Adresse mail</label>
                                <input type="text"  id="mail" placeholder="Entrez votre adresse mail"></input>
                            </div>
                            <div className="contact__form contact__form--content contact__form--message">
                                <label htlmlFor="message">Votre message</label>
                                <textarea  id="message" cols="30" rows="5"></textarea>  
                            </div>
                            <div className="contact__form contact__form--submit">
                                <button className="contact__form contact__form--button" type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
