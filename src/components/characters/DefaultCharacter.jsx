import {Component} from "react";

const defaultCharacter = (WrappedComponent, power) => {

    class DefaultCharacter extends Component {
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
                this.props.reduceHandler(ComponentName, power);
            }
        }

        render() {
            return <WrappedComponent hocState={this.state} hocAddOneHit={this.addOneHit} {...this.props} />
        }
    }

    return DefaultCharacter;
}

export default defaultCharacter;