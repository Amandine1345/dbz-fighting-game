// Libraries
import {Component} from "react";

// Custom Components
import Goku from "./components/characters/Goku.jsx";
import Vegeta from "./components/characters/Vegeta.jsx";

// Custom CSS
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vegetaLife: 100,
            gokuLife: 100,
        }
    }

    reduceLife = (componentName, power) => {
        const concernedCharacterLife = componentName === 'Goku' ? 'vegetaLife' : 'gokuLife';

        if (this.state[concernedCharacterLife] <= 0) {
            return;
        }

        this.setState(prevState => ({
            [concernedCharacterLife]: prevState[concernedCharacterLife] - power,
        }));
    }

    render() {
        return (
            <div className="container text-center">
                <h1>Goku vs. Vegeta</h1>
                <hr/>
                <div className="row">
                    <Vegeta life={this.state.vegetaLife}  reduceHandler={this.reduceLife} />
                    <Goku life={this.state.gokuLife} reduceHandler={this.reduceLife} />
                </div>
            </div>
        )
    }
}

export default App
