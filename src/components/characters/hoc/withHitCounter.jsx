import {useEffect, useState} from "react";

const withHitCounter = (WrappedComponent, power) => {
    return ({...props}) => {
        const {reduceLifeHandler} = props;

        const [hits, setHits] = useState(0);

        const addOneHit = () => {
            setHits(prevState => prevState + 1);
        }

        useEffect(() => {
            const componentName = WrappedComponent.name;
            if (hits > 0) {
                reduceLifeHandler(componentName, power);
            }
        }, [hits]);

        return (
            <WrappedComponent
                hocHits={hits}
                hocAddOneHit={addOneHit}
                {...props}
            />
        )
    }
}

export default withHitCounter;
