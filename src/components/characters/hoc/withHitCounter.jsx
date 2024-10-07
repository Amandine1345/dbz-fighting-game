import {forwardRef, useEffect, useImperativeHandle, useState} from "react";

const withHitCounter = (WrappedComponent, power) => {
    return forwardRef((props, ref) => {
        const {forwardRef, reduceLifeHandler} = props;

        const [hits, setHits] = useState(0);

        useImperativeHandle(ref, () => ({
            setHits,
        }));

        const addOneHit = () => {
            setHits(prevState => prevState + 1);
        }

        useEffect(() => {
            const componentName = WrappedComponent.displayName;
            if (hits > 0) {
                reduceLifeHandler(componentName, power);
            }
        }, [hits]);

        return (
            <WrappedComponent
                hocHits={hits}
                hocAddOneHit={addOneHit}
                ref={forwardRef}
                {...props}
            />
        )
    });
}

export default withHitCounter;
