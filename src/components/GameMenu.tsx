import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GameMenu.css';
import Button from './Button';
import starImg from '../assets/star.svg';

interface GameMenuProps {
    playerWins: number;
    pcWins: number;
    isWinner: boolean | null;
    onRestart: () => void;
    playerChoice: string;
    pcChoice: string;
}

const GameMenu: React.FC<GameMenuProps> = ({ playerWins, pcWins, isWinner, onRestart, playerChoice, pcChoice }) => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMenu(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!showMenu) {
        return null;
    }

    return (
        <div className='game-menu'>
            <img src={starImg} alt="Estrella" />
            <div className='game-menu__box'>
                {isWinner === null ? (
                    <div>
                        <h3 className='game-menu__title'>Empate!</h3>
                        <h4 className='game-menu__subtitle'>({playerChoice} vs {pcChoice})</h4>
                    </div>
                ) : isWinner ? (
                    <div>
                        <h3 className='game-menu__title'>Ganaste!</h3>
                        <h4 className='game-menu__subtitle'>({playerChoice} vs {pcChoice})</h4>   
                    </div>
                ) : (
                    <div>
                        <h3 className='game-menu__title'>Perdiste!</h3>
                        <h4 className='game-menu__subtitle'> ({playerChoice} vs {pcChoice})</h4>
                    </div>
                )}
                
                <div className="game-menu__results">
                    <p className='results-details'>Jugador: {playerWins}</p>
                    <p className='results-details'>Computadora: {pcWins}</p>
                </div>
            </div>
            <div className="btn-container">
                <Link to='/rockpaperscissors/game' onClick={onRestart}>
                    <Button text='Volver a jugar'/>
                </Link>

                <Link to='/rockpaperscissors/'>
                    <Button text='Menu Principal'/>
                </Link>
            </div>
        </div>
    );
};

export default GameMenu;