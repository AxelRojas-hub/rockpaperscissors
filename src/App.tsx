import './App.css'
import { Link } from 'react-router-dom'
import Button from './components/Button'
import piedraImg from './assets/piedra.svg'
import papelImg from './assets/papel.svg'
import tijeraImg from './assets/tijera.svg'

function App() {

  return (
    <>
        <h1 className='home-text'>Piedra<br />Papel<span> ó</span><br />Tijera</h1>
        <Link to={'/rockpaperscissors/rules'}>
          <Button text='Empezar' />
        </Link>
        <div className="home-rps">
          <div className="home-rps__item">
            <img src={piedraImg} alt="Piedra" />
          </div>
          <div className="home-rps__item">
            <img src={papelImg} alt="Papel" />
          </div>
          <div className="home-rps__item">
            <img src={tijeraImg} alt="Tijera" />
          </div>
        </div>
    </>
  )
}

export default App
