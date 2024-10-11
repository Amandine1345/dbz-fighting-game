import {forwardRef} from "react";
import PropTypes from "prop-types";

import withHitCounter from "./hoc/withHitCounter.jsx";
import TableScore from "./subs/TableScore.jsx";
import Button from "./subs/Button.jsx";
import gokuPicture from '../../assets/media/goku.png';

const Goku = ({ forwardRef, hocHits, hocAddOneHit, life }) => {
    return (
        <div ref={forwardRef} className="col">
            <img src={gokuPicture} alt="Goku" height="450px"/>
            <br/>
            <Button addOneHit={hocAddOneHit} life={life}/>
            <TableScore hits={hocHits} life={life}/>
        </div>
    )
};

Goku.propTypes = {
    forwardRef: PropTypes.object,
    hocHits: PropTypes.number.isRequired,
    hocAddOneHit: PropTypes.func.isRequired,
    life: PropTypes.number.isRequired,
}

const GokuForwardRef = forwardRef(
    function GokuComponent(props, ref) {
        return <Goku {...props} forwardRef={ref}/>;
    }
);

GokuForwardRef.displayName = 'GokuForwardRef';

const GokuWithHitCounter = withHitCounter(GokuForwardRef, 20);

GokuWithHitCounter.displayName = 'GokuWithHitCounter';

export default GokuWithHitCounter;