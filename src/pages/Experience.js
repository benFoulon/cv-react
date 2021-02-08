import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

export default function Experience() {
    let history = useHistory();

    function backToHome(){
        history.push("/")
    }

    const[experiences, setExperience] = useState([
        {
            id: 1,
            title: "De Novembre 2017 à Juin 2019:",
            content: "Commercial en rénovation énergétique pour Helios",
        },
        {
            id: 2,
            title: "De Juillet à Septembre 2019:",
            content: "Manutentionnaire pour GLS",
        },
        {
            id: 3,
            title: "De Septembre à Novembre 2019:",
            content: "Employé libre services chez Carrefour",
        },
        {
            id: 4,
            title: "De Décembre a Janvier 2020:",
            content: "Téléconseiller Orange pour Yzee services",
        },
        {
            id: 5,
            title: "De Janvier a Juin 2020:",
            content: "Diverses missions d'intérim",
        },
        {
            id: 6,
            title: "De Juin à Aout 2020:",
            content: "Manutentionnaire logistique pour Kiabi",
        },
        {
            id: 7,
            title: "D'Octobre 2020 à Mai 2021:",
            content: "Formation dévellopeur web et mobil chez PopSchool"
        }
    ])

    const expList = experiences.map(experience =>{
        return(
            <div>
                <li className="list__title" key={experience.id}>{experience.title}</li>
                <p>{experience.content}</p>        
            </div>
            )
    })
    return (
        <div>
            <i className="fas fa-arrow-circle-left fa-2x" onClick={backToHome}></i>
            <h2>Expériences</h2>
            <div className="experience__box">
                <ul>
                    {expList}
                </ul>
            </div>
        </div>
    )
}
