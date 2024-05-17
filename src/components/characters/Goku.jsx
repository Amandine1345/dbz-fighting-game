import withHitCounter from "./hoc/withHitCounter.jsx";
import gokuPicture from '../../assets/media/goku.png';
import TableScore from "./subs/TableScore.jsx";

const Goku = (props) => {
    const {hocHits, hocAddOneHit, life} = props;

    const buttonTextDisplay = life > 0 ? 'Hit' : 'Dead';
    const buttonStyleDisplay = life > 0 ? 'btn-success' : 'btn-danger disabled';

    return (
        <div className="col">
            <img src={gokuPicture} alt="Goku" height="450px"/>
            <br/>
            <button onClick={hocAddOneHit} className={`btn ${buttonStyleDisplay}`}>{buttonTextDisplay}</button>
            <TableScore hits={hocHits} life={life} />
        </div>
    )
}

export default withHitCounter(Goku, 20);