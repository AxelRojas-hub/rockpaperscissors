import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

import GameOptions from './components/GameOptions';
import GameResult from './components/GameResult';
import GameMenu from './components/GameMenu';

const RPS_OPTIONS = ['piedra', 'papel', 'tijera'] as const;
type RPS = typeof RPS_OPTIONS[number];

const Game: React.FC = () => {
    const [isWaiting, setIsWaiting] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState(3);
    //Guarda la eleccion del jugador, se setea una random por defecto
    const [playerChoice, setPlayerChoice] = useState<RPS | null>(null); 
    const [pcChoice, setPcChoice] = useState<RPS | null>(RPS_OPTIONS[Math.floor(Math.random() * RPS_OPTIONS.length)]); 
    const [playerWins, setPlayerWins] = useState(0);
    const [pcWins, setPcWins] = useState(0);
    const [isWinner, setIsWinner] = useState<boolean | null>(null);


    //Empieza el timer y maneja el tiempo restante
    useEffect(() => {
        if (isWaiting) {
            const interval = setInterval(() => {
                setTimeRemaining(prevTime => {
                    if (prevTime === 1) {
                        setIsWaiting(false);
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isWaiting]);

    const handlePlayerChoice = (choice: string) => {
        setPlayerChoice(choice as RPS);
    }
    const handleRestart = () => {
        setIsWaiting(true);
        setTimeRemaining(3);
        setPlayerChoice(null);
        setPcChoice(RPS_OPTIONS[Math.floor(Math.random() * RPS_OPTIONS.length)]);
    };

    useEffect(() => {
        if (playerChoice && pcChoice) {
            if (playerChoice === pcChoice) {
                console.log('Empate:', { playerChoice, pcChoice});
                setIsWinner(null);
            } else{
                if (
                    (playerChoice === 'piedra' && pcChoice === 'tijera') ||
                    (playerChoice === 'papel' && pcChoice === 'piedra') ||
                    (playerChoice === 'tijera' && pcChoice === 'papel')
                ) {
                    console.log('Ganaste:', { playerChoice, pcChoice});
                    setPlayerWins(prev => prev + 1);
                    setIsWinner(true);
                } else {
                    console.log('Perdiste:', { playerChoice, pcChoice});
                    setPcWins(prev => prev + 1);
                    setIsWinner(false);
                }
            }
        }
    },[playerChoice, pcChoice]);

    const setRandomChoice= ()=>{
        const option=RPS_OPTIONS[Math.floor(Math.random() * RPS_OPTIONS.length)];
        setPlayerChoice(option);
        return option;
    }
    return (
        <div>
            {isWaiting?
            <div>
                <Link to={"/"}>
                    <span className='game-homebtn'>🏠 Menu</span>
                </Link>
                <h1 className='game-title'>ELEGI: ¿PIEDRA, PAPEL, O TIJERA?</h1>
                <span className='game-timer'>{timeRemaining}</span>
                <GameOptions playerChoice={playerChoice!} handlePlayerChoice={handlePlayerChoice} />
            </div>
            :(
                <>
                    <GameResult playerChoice={playerChoice? playerChoice : setRandomChoice()} pcChoice={pcChoice!} />
                    <GameMenu 
                        playerWins={playerWins}
                        pcWins={pcWins}
                        isWinner={isWinner}
                        onRestart={handleRestart}
                        playerChoice={playerChoice!}
                        pcChoice={pcChoice!}
                    />
                </>
            )}
        </div>
    );
};

export default Game;