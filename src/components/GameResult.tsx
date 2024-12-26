import React from 'react';

interface GameResultProps {
    pcChoice: string;
    playerChoice: string;
}

const GameResult: React.FC<GameResultProps> = ({ pcChoice, playerChoice }) => {
    return (
        <div className='game-result'>
            <img className='game-pcChoice' src={`src/assets/${pcChoice}.svg`} alt={pcChoice} />
            {playerChoice ? (
                <img className='game-playerChoice' src={`src/assets/${playerChoice}.svg`} alt={playerChoice} />
            ) : ( //Modificar para elegir una random
                <h3>No elegiste ninguna opción!</h3>
            )}
        </div>
    );
};

export default GameResult;