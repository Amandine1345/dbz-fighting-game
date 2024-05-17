// Libraries
import {Fragment, useEffect, useState} from "react";

// Custom Components
import Goku from "./components/characters/Goku.jsx";
import Vegeta from "./components/characters/Vegeta.jsx";
import EndOfGameModal from "./components/modals/EndOfGameModal.jsx";

// Custom CSS
import './App.css'

function App() {
    // States
    const [isEndOfGameState, setEndOfGame] = useState(false);
    const [gokuLifeState, setGokuLife] = useState(100);
    const [vegetaLifeState, setVegetaLife] = useState(100);

    // References
    // const gokuRef = useRef(null);
    // const vegetaRef = useRef();

    // Cycle
    useEffect(() => {
        if (vegetaLifeState <= 0 || gokuLifeState <= 0) {
            setEndOfGame(true);
        }
    }, [vegetaLifeState, gokuLifeState])

    const reduceLife = (componentName, power) => {
        componentName === 'Goku'
            ? setVegetaLife(prevState => prevState - power)
            : setGokuLife(prevState => prevState - power);
    }

    const reStart = () => {
        // gokuRef.current.setState({ hits: 0 });
        // vegetaRef.current.setState({ hits: 0 });

        setEndOfGame(false);
        setGokuLife(100);
        setVegetaLife(100);
    }

    const showModal = isEndOfGameState && <EndOfGameModal reStartHandler={reStart}/>;

    return (
        <Fragment>
            <div className="container text-center">
                <h1>Goku vs. Vegeta</h1>
                <hr/>
                <div className="row">
                    <Vegeta life={vegetaLifeState} reduceLifeHandler={reduceLife}/>
                    <Goku life={gokuLifeState} reduceLifeHandler={reduceLife} />
                </div>
            </div>
            {showModal}
        </Fragment>
    )
}

export default App
