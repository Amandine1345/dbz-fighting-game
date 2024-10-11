import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import GameOverPicture from '../../assets/media/game-over.gif'

const EndOfGameModal = ({ reStartHandler }) => {
    return ReactDOM.createPortal(
        <div className="modal">
            <div>
                <p><img src={GameOverPicture} alt="Game over" /></p>
                <button onClick={() => reStartHandler()}>Re-start</button>
            </div>
        </div>,
        document.getElementById('second-root')
    )
}

EndOfGameModal.propTypes = {
    reStartHandler: PropTypes.func.isRequired,
}

export default EndOfGameModal;