import { Route, Routes } from 'react-router-dom';
import App from './App';
import Game from './Game';
import Rules from './Rules';

const AppRoutes = () => (
  <Routes>
    <Route path="/rockpaperscissors/" element={<App />} />
    <Route path="/rockpaperscissors/rules" element={<Rules />} />
    <Route path="/rockpaperscissors/game" element={<Game/>} /> 
  </Routes>
);

export default AppRoutes;