import React from 'react';
import { Link } from 'react-router-dom';
import './GameMenu.css';
import Button from './Button';
interface GameMenuProps {
    playerWins: number;
    pcWins: number;
    isWinner: boolean | null;
    onRestart: () => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ playerWins, pcWins, isWinner, onRestart }) => {
    return (
        <div className='game-menu'>
            <img src="src/assets/star.svg" alt="Estrella" />
            <div className='game-menu__box'>
                {isWinner === null ? (
                    <h3 className='game-menu__title'>Empate!</h3>
                ) : isWinner ? (
                    <h3 className='game-menu__title'>Ganaste!</h3>
                ) : (
                    <h3 className='game-menu__title'>Perdiste!</h3>
                )}
                <div className="game-menu__results">
                    <p className='results-details'>Jugador: {playerWins}</p>
                    <p className='results-details'>Computadora: {pcWins}</p>
                </div>
            </div>
            <div className="btn-container">
                <Link to='/game' onClick={onRestart}>
                    <Button text='Volver a jugar'/>
                </Link>
            </div>
        </div>
    );
};

export default GameMenu;