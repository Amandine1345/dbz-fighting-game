import { Component } from "react";

const defaultCharacter = (WrappedComponent) => {

    class DefaultCharacter extends Component {
        state = {
            hits: 0,
        }

        addOneHit = () => {
            this.setState(prevState => {
                return {
                    hits: prevState.hits + 1,
                }
            });
        }

        render() {
            return <WrappedComponent hocState={this.state} hocAddOneHit={this.addOneHit}/>
        }
    }

    return DefaultCharacter;
}

export default defaultCharacter;