import React from 'react';
import piedraImg from './src/assets/piedra.svg';
import papelImg from './src/assets/papel.svg';
import tijeraImg from './src/assets/tijera.svg';

interface GameResultProps {
    pcChoice: 'piedra' | 'papel' | 'tijera';
    playerChoice: 'piedra' | 'papel' | 'tijera';
}

const GameResult: React.FC<GameResultProps> = ({ pcChoice, playerChoice }) => {
    const choiceToImg: { [key in 'piedra' | 'papel' | 'tijera']: string } = {
        piedra: piedraImg,
        papel: papelImg,
        tijera: tijeraImg
    };

    return (
        <div className='game-result'>
            <img className='game-pcChoice' src={choiceToImg[pcChoice]} alt={pcChoice} />
            <img className='game-playerChoice' src={choiceToImg[playerChoice]} alt={playerChoice} />
        </div>
    );
};

export default GameResult;