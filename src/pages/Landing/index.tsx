import React from 'react';
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import './style.css';

function Landing() {
  return (
    <div id="landing-page">
      <div id="landing-page-content" className="container">
        <div className="landing-page-logo-container">
          <img src={ logoImg } alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={ landingImg } alt="Estudantes na plataforma" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src="" alt="Estudar" />
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src="" alt="Ensinar" />
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas.
        </span>
      </div>
    </div>
  )
}

export default Landing;