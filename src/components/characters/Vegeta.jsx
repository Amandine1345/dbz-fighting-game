import withHitCounter from "./hoc/withHitCounter.jsx";
import vegetaPicture from '../../assets/media/vegeta.png';
import TableScore from "./subs/TableScore.jsx";

const Vegeta = (props) => {
    const {hocHits, hocAddOneHit, life, } = props;

    const buttonTextDisplay = life > 0 ? 'Hit' : 'Dead';
    const buttonStyleDisplay = life > 0 ? 'btn-success' : 'btn-danger disabled';

    return (
        <div className="col">
            <img src={vegetaPicture} alt="Vegeta" height="450px"/>
            <br/>
            <button onClick={hocAddOneHit} className={`btn ${buttonStyleDisplay}`}>{buttonTextDisplay}</button>
            <TableScore hits={hocHits} life={life} />
        </div>
    )
}

export default withHitCounter(Vegeta, 10);