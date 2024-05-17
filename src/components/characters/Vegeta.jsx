import withHitCounter from "./hoc/withHitCounter.jsx";
import TableScore from "./subs/TableScore.jsx";
import Button from "./subs/Button.jsx";
import vegetaPicture from '../../assets/media/vegeta.png';

const Vegeta = (props) => {
    const {hocHits, hocAddOneHit, life} = props;

    return (
        <div className="col">
            <img src={vegetaPicture} alt="Vegeta" height="450px"/>
            <br/>
            <Button addOneHit={hocAddOneHit} life={life} />
            <TableScore hits={hocHits} life={life} />
        </div>
    )
}

export default withHitCounter(Vegeta, 10);