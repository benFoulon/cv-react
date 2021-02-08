import React from 'react';
import {useHistory} from "react-router-dom";

export default function About() {
    let history = useHistory();

    function backToHome(){
        history.push("/")
    }

    return (
        <div>
            <i className="fas fa-arrow-circle-left fa-2x" onClick={backToHome}></i>
            <h2>À propos</h2>
            <div className="containeur about__box" id="presentation">
                <div className="about__presentation--box">
                    <p className="about__presentation about__presentation--paragraphe1">Parlons un peu de moi, je m'appelle Benjamin, j'ai 22 ans et j'ai pour objectif de devenir développeur.
                    Issue d'un bac Sciences et Technologies du Management et de la Gestion, j'ai d'abord commencé ma jeune carrière en tant que commercial dans le domaine de la rénovation énergétique de l'habitat.</p>
                    <p className="about__presentation about__presentation--paragraphe2">Cette expérience, la première qui plus est, a été trés enrichissante pour moi, sur le plan de la communication et de la confiance en soi.
                    Malgré ça, je ne me voyais pas commencer une carrière à ce poste. Depuis plusieurs années ma passion pour les nouvelles technologies m'a encouragé à me lancer dans une formation afin de devenir un véritable développeur.
                </p>
                    <p className="about_presentation">Je dirais que la curiosité est l'une de mes principal qualité, en effet, rechercher, trouver, apprendre sont des choses qui me passionne. Etant actuellement en formation avec PopSchool, j'ai pu dévelloper mes aptitudes sur plusieur technologies qui m'était encore inconnu mais pour lesquels je prend énormément de plaisir a l'apprentissage.
                    Par exemple, pour ce CV j'ai utilisé le framework React avec la librairie 'React-router'</p>
                </div>
            </div>
        </div>
    )
}
