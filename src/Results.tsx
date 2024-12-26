import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

const Results: React.FC = () => {
    return (
        <div>
            <Link to={"/"}>
                <span className='results-homebtn'>🏠</span>
            </Link>
            <h1 className='results-title'>Resultados</h1>
            {/* Aquí puedes agregar la lógica para mostrar los resultados del juego */}
        </div>
    );
};

export default Results;