const Button = (props) => {
    const {addOneHit, life} = props;
    const buttonTextDisplay = life > 0 ? 'Hit' : 'Dead';
    const buttonStyleDisplay = life > 0 ? 'btn-success' : 'btn-danger disabled';

    return (
        <button onClick={() => addOneHit()} className={`btn ${buttonStyleDisplay}`}>{buttonTextDisplay}</button>
    )
}

export default Button;