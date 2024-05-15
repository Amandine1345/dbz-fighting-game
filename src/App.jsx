// Libraries
import {Component} from "react";

// Custom Components
import Vegeta from "./components/characters/Vegeta.jsx";

// Custom CSS
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1>Goku vs. Vegeta</h1>
                <hr/>
                <div className="row">
                    <Vegeta/>
                </div>
            </div>
        )
    }
}

export default App
