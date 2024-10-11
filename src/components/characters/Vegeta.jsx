import {forwardRef} from "react";
import PropTypes from "prop-types";

import withHitCounter from "./hoc/withHitCounter.jsx";
import TableScore from "./subs/TableScore.jsx";
import Button from "./subs/Button.jsx";
import vegetaPicture from '../../assets/media/vegeta.png';

const Vegeta = ({ forwardRef, hocHits, hocAddOneHit, life }) => {
    return (
        <div ref={forwardRef} className="col">
            <img src={vegetaPicture} alt="Vegeta" height="450px"/>
            <br/>
            <Button addOneHit={hocAddOneHit} life={life}/>
            <TableScore hits={hocHits} life={life}/>
        </div>
    )
};

Vegeta.propTypes = {
    forwardRef: PropTypes.object,
    hocHits: PropTypes.number.isRequired,
    hocAddOneHit: PropTypes.func.isRequired,
    life: PropTypes.number.isRequired,
}

const VegetaForwardRef = forwardRef(
    function VegetaComponent(props, ref) {
        return <Vegeta {...props} forwardRef={ref}/>
    }
);

VegetaForwardRef.displayName = 'VegetaForwardRef';

const VegetaWithHitCounter = withHitCounter(VegetaForwardRef, 10);

VegetaWithHitCounter.displayName = 'VegetaWithHitCounter';

export default VegetaWithHitCounter;