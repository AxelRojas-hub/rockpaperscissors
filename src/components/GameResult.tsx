import React from 'react';

interface GameResultProps {
    pcChoice: string;
    playerChoice: string;
}

const GameResult: React.FC<GameResultProps> = ({ pcChoice, playerChoice }) => {
    return (
        <div className='game-result'>
            <img className='game-pcChoice' src={`src/assets/${pcChoice}.svg`} alt={pcChoice} />
            <img className='game-playerChoice' src={`src/assets/${playerChoice}.svg`} alt={playerChoice} />
        </div>
    );
};

export default GameResult;