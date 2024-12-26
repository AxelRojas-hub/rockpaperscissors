import './App.css'
import { Link } from 'react-router-dom'
import Button from './components/Button'

function App() {

  return (
    <>
        <h1 className='home-text'>Piedra<br />Papel<span> ó</span><br />Tijera</h1>
        <Link to={'/rules'}>
          <Button text='Empezar' />
        </Link>
        <div className="home-rps">
          <div className="home-rps__item">
            <img src="./src/assets/piedra.svg" alt="Piedra" />
          </div>
          <div className="home-rps__item">
            <img src="src/assets/papel.svg" alt="Papel" />
          </div>
          <div className="home-rps__item">
            <img src="src/assets/tijera.svg" alt="Tijera" />
          </div>
        </div>
    </>
  )
}

export default App
