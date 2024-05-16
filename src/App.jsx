// Libraries
import React, {Component, Fragment} from "react";

// Custom Components
import Goku from "./components/characters/Goku.jsx";
import Vegeta from "./components/characters/Vegeta.jsx";
import EndOfGameModal from "./components/modals/EndOfGameModal.jsx";

// Custom CSS
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.vegetaRef = React.createRef();
        this.gokuRef = React.createRef();

        this.state = {
            endOfGame: false,
            vegetaLife: 100,
            gokuLife: 100,
        }
    }

    reduceLife = (componentName, power) => {
        const concernedCharacterLife = componentName === 'Goku' ? 'vegetaLife' : 'gokuLife';

        this.setState(prevState => ({
            [concernedCharacterLife]: prevState[concernedCharacterLife] - power,
            endOfGame: (prevState[concernedCharacterLife] - power) <= 0,
        }));
    }

    reStart = () => {
        this.gokuRef.current.setState({ hits: 0 });
        this.vegetaRef.current.setState({ hits: 0 });

        this.setState({
            endOfGame: false,
            vegetaLife: 100,
            gokuLife: 100,
        })
    }

    render() {
        const showModal = this.state.endOfGame && <EndOfGameModal reStartHandler={this.reStart}/>;

        return (
            <Fragment>
                <div className="container text-center">
                    <h1>Goku vs. Vegeta</h1>
                    <hr/>
                    <div className="row">
                        <Vegeta ref={this.vegetaRef} life={this.state.vegetaLife} reduceHandler={this.reduceLife}/>
                        <Goku ref={this.gokuRef} life={this.state.gokuLife} reduceHandler={this.reduceLife}/>
                    </div>
                </div>
                {showModal}
            </Fragment>
        )
    }
}

export default App
