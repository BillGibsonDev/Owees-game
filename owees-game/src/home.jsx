import './App.css'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <h1>Hello Owee :)</h1>
            <Link to="/game">Lets Play</Link>
        </>
    )
}

export default Home