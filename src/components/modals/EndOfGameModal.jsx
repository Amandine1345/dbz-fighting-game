import { Component } from "react";
import ReactDOM from "react-dom";

import GameOverPicture from '../../assets/media/game-over.gif'

class EndOfGameModal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div className="modal">
                <div>
                    <p><img src={GameOverPicture} alt="Game over" /></p>
                    <button onClick={() => this.props.reStartHandler()}>Re-start</button>
                </div>
            </div>,
            document.getElementById('second-root')
        )
    }
}

export default EndOfGameModal;