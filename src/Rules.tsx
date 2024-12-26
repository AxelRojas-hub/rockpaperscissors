import React from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';
import Button from './components/Button';
import piedraImg from './assets/piedra.svg';
import papelImg from './assets/papel.svg';
import tijeraImg from './assets/tijera.svg';

const Rules: React.FC = () => {
    return (
        <>
            <h2 className='rules-text'>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
            <Link to="/rockpaperscissors/game">
                <Button text='¡Jugar!' />
            </Link>
            <div className="rules-rps">
                <div className="rules-rps__item">
                    <img src={piedraImg} alt="Piedra" />
                </div>
                <div className="rules-rps__item">
                    <img src={papelImg} alt="Papel" />
                </div>
                <div className="rules-rps__item">
                    <img src={tijeraImg} alt="Tijera" />
                </div>
            </div>
        </>
    );
};

export default Rules;