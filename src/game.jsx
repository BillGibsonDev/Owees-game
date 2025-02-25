import './App.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import animals from './AnimalsList.jsx';
import HomeButton from './assets/home.png';

function Game() {

    const [currentKey, setCurrentKey] = useState(null);

    let currentSound = null;

    const findAnimalAssets = (key) => {
        const animal = animals.find(animal => animal.key === key);
        return animal;
    }

    const handleKeyPress = (event) => {
        const key = event.key.toLowerCase();
        const animal = findAnimalAssets(key);
        if (animal) {
            if (currentSound) {
                currentSound.pause();
            }
        }
        setCurrentKey(animal)
        const sound = new Audio(animal.sound);
        currentSound = sound;
        sound.play();

        setTimeout(() => {
            sound.pause();
        }, (5000))
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className='game-section'>
            {!currentKey && <h1>Press any letter key! :)</h1>}
            {currentKey && currentKey.image && <img src={currentKey.image} alt={currentKey.name} />}
            {currentKey && currentKey.name && <h1>{currentKey.name}</h1>}
            <Link to="/" className='home-link'><img src={HomeButton} alt='Home' className='home-button' /></Link>
        </div>
    )
}

export default Game