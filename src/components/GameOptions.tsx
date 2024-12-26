import React from 'react';

interface GameOptionsProps {
    playerChoice: string;
    handlePlayerChoice: (choice: string) => void;
}

const GameOptions: React.FC<GameOptionsProps> = ({ playerChoice, handlePlayerChoice }) => {
    return (
        <div className="game-rps">
            <div className={`game-rps__item ${playerChoice === 'piedra' ? 'selected' : ''}`} onClick={() => handlePlayerChoice('piedra')}>
                <img src="./src/assets/piedra.svg" alt="Piedra" />
            </div>
            <div className={`game-rps__item ${playerChoice === 'papel' ? 'selected' : ''}`} onClick={() => handlePlayerChoice('papel')}>
                <img src="src/assets/papel.svg" alt="Papel" />
            </div>
            <div className={`game-rps__item ${playerChoice === 'tijera' ? 'selected' : ''}`} onClick={() => handlePlayerChoice('tijera')}>
                <img src="src/assets/tijera.svg" alt="Tijera" />
            </div>
        </div>
    );
};

export default GameOptions;