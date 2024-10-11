import PropTypes from "prop-types";

const Button = ({addOneHit, life}) => {
    const buttonTextDisplay = life > 0 ? 'Hit' : 'Dead';
    const buttonStyleDisplay = life > 0 ? 'btn-success' : 'btn-danger disabled';

    return (
        <button onClick={() => addOneHit()} className={`btn ${buttonStyleDisplay}`}>{buttonTextDisplay}</button>
    )
}

Button.propTypes = {
    addOneHit: PropTypes.func.isRequired,
    life: PropTypes.number.isRequired,
}

export default Button;