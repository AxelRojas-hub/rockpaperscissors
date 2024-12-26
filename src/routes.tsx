import { Route, Routes } from 'react-router-dom';
import App from './App';
import Game from './Game';
import Rules from './Rules';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/rules" element={<Rules />} />
    <Route path="/game" element={<Game/>} /> 
  </Routes>
);

export default AppRoutes;