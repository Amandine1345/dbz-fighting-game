import {forwardRef} from "react";
import withHitCounter from "./hoc/withHitCounter.jsx";
import TableScore from "./subs/TableScore.jsx";
import Button from "./subs/Button.jsx";
import vegetaPicture from '../../assets/media/vegeta.png';

const Vegeta = (props) => {
    const {forwardRef, hocHits, hocAddOneHit, life} = props;

    return (
        <div ref={forwardRef} className="col">
            <img src={vegetaPicture} alt="Vegeta" height="450px"/>
            <br/>
            <Button addOneHit={hocAddOneHit} life={life}/>
            <TableScore hits={hocHits} life={life}/>
        </div>
    )
};

const VegetaForwardRef = forwardRef(
    function VegetaComponent(props, ref) {
        return <Vegeta {...props} forwardRef={ref}/>
    }
);
VegetaForwardRef.displayName = 'Vegeta';

const VegetaWithHitCounter = withHitCounter(VegetaForwardRef, 10);

export default VegetaWithHitCounter;