import withHitCounter from "./hoc/withHitCounter.jsx";
import TableScore from "./subs/TableScore.jsx";
import Button from "./subs/Button.jsx";
import gokuPicture from '../../assets/media/goku.png';

const Goku = (props) => {
    const {hocHits, hocAddOneHit, life} = props;

    return (
        <div className="col">
            <img src={gokuPicture} alt="Goku" height="450px"/>
            <br/>
            <Button addOneHit={hocAddOneHit} life={life} />
            <TableScore hits={hocHits} life={life} />
        </div>
    )
}

export default withHitCounter(Goku, 20);