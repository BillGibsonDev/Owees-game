
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Game from './game.jsx';
import Home from './home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  )
}

export default App
