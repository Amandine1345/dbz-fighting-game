import {Component} from "react";

const withHitCounter = (WrappedComponent, power) => {

    class WithHitCounter extends Component {
        state = {
            hits: 0,
        }

        addOneHit = () => {
            this.setState(prevState => ({
                hits: prevState.hits + 1,
            }));
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.state !== prevState) {
                const ComponentName = WrappedComponent.name;

                if (this.state.hits > prevState.hits) {
                    this.props.reduceHandler(ComponentName, power);
                }
            }
        }

        render() {
            return <WrappedComponent hocState={this.state} hocAddOneHit={this.addOneHit} {...this.props} />
        }
    }

    return WithHitCounter;
}

export default withHitCounter;