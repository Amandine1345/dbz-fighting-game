import {forwardRef} from "react";
import withHitCounter from "./hoc/withHitCounter.jsx";
import TableScore from "./subs/TableScore.jsx";
import Button from "./subs/Button.jsx";
import gokuPicture from '../../assets/media/goku.png';

const Goku = (props) => {
    const {forwardRef, hocHits, hocAddOneHit, life} = props;

    return (
        <div ref={forwardRef} className="col">
            <img src={gokuPicture} alt="Goku" height="450px"/>
            <br/>
            <Button addOneHit={hocAddOneHit} life={life}/>
            <TableScore hits={hocHits} life={life}/>
        </div>
    )
};

const GokuForwardRef = forwardRef(
    function GokuComponent(props, ref) {
        return <Goku {...props} forwardRef={ref}/>;
    }
);
GokuForwardRef.displayName = 'Goku';

const GokuWithHitCounter = withHitCounter(GokuForwardRef, 20);

export default GokuWithHitCounter;