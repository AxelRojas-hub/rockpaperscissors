import React from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';
import Button from './components/Button';

const Rules: React.FC = () => {
    return (
        <>
            <h2 className='rules-text'>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
            <Link to="/rockpaperscissors/game">
                <Button text='¡Jugar!' />
            </Link>
            <div className="rules-rps">
          <div className="rules-rps__item">
            <img src="./src/assets/piedra.svg" alt="Piedra" />
          </div>
          <div className="rules-rps__item">
            <img src="./src/assets/papel.svg" alt="Papel" />
          </div>
          <div className="rules-rps__item">
            <img src="./src/assets/tijera.svg" alt="Tijera" />
          </div>
        </div>
        </>
    );
};

export default Rules;