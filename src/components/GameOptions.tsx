import React from 'react';
import piedraImg from '../assets/piedra.svg'
import papelImg from '../assets/papel.svg'
import tijeraImg from '../assets/tijera.svg'
interface GameOptionsProps {
    playerChoice: string;
    handlePlayerChoice: (choice: string) => void;
}

const GameOptions: React.FC<GameOptionsProps> = ({ playerChoice, handlePlayerChoice }) => {
    return (
        <div className="game-rps">
            <div className={`game-rps__item ${playerChoice === 'piedra' ? 'selected' : ''}`} onClick={() => handlePlayerChoice('piedra')}>
                <img src={piedraImg} alt="Piedra" />
            </div>
            <div className={`game-rps__item ${playerChoice === 'papel' ? 'selected' : ''}`} onClick={() => handlePlayerChoice('papel')}>
                <img src={papelImg} alt="Papel" />
            </div>
            <div className={`game-rps__item ${playerChoice === 'tijera' ? 'selected' : ''}`} onClick={() => handlePlayerChoice('tijera')}>
                <img src={tijeraImg} alt="Tijera" />
            </div>
        </div>
    );
};

export default GameOptions;