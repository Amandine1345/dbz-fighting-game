// Libraries
import {useEffect, useState, useCallback, useRef} from "react";

// Custom Components
import GokuWithHitCounter from "./components/characters/Goku.jsx";
import VegetaWithHitCounter from "./components/characters/Vegeta.jsx";
import EndOfGameModal from "./components/modals/EndOfGameModal.jsx";

// Custom CSS
import './App.css'

function App() {
    // States
    const [isEndOfGameState, setEndOfGame] = useState(false);
    const [gokuLifeState, setGokuLife] = useState(100);
    const [vegetaLifeState, setVegetaLife] = useState(100);

    // References
    const gokuRef = useRef(null);
    const vegetaRef = useRef(null);

    // Cycle
    useEffect(() => {
        if (vegetaLifeState <= 0 || gokuLifeState <= 0) {
            setEndOfGame(true);
        }
    }, [vegetaLifeState, gokuLifeState])

    const reduceLife = useCallback((componentName, power) => {
        componentName === 'GokuForwardRef'
            ? setVegetaLife(prevState => prevState - power)
            : setGokuLife(prevState => prevState - power);
    }, [setVegetaLife, setGokuLife]);

    const reStart = () => {
        gokuRef.current.setHits(0);
        vegetaRef.current.setHits(0);

        setEndOfGame(false);
        setGokuLife(100);
        setVegetaLife(100);
    }

    const showModal = isEndOfGameState && <EndOfGameModal reStartHandler={reStart}/>;

    return (
        <>
            <div className="container text-center">
                <h1>Goku vs. Vegeta</h1>
                <hr/>
                <div className="row">
                    <VegetaWithHitCounter ref={vegetaRef} life={vegetaLifeState} reduceLifeHandler={reduceLife} />
                    <GokuWithHitCounter ref={gokuRef} life={gokuLifeState} reduceLifeHandler={reduceLife} />
                </div>
            </div>
            {showModal}
        </>
    )
}

export default App
