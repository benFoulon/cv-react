import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="homepage">
            <div className="homepage_title">
                <p>Benjamin Foulon</p>
                <p>Développeur web et mobile</p>
            </div>
            {/* photo de profil */}
            <div className="homepage_profilpic"></div>
            
            <ul className="homepage_navlink">
                <li><Link to="/about">A propos</Link></li>
                <li><Link to="/experience">Expérience</Link></li>
                <li><Link to="/project">Projets</Link></li>
                <li><Link to="/skill">Compétences</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            
        </div>
    )
}
