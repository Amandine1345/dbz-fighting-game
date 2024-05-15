import { Component } from "react";
import gokuPicture from '../../assets/media/goku.png';

class Goku extends Component {
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
        return (
            <div className="col">
                <img src={gokuPicture} alt="Goku" height="450px"/>
                <br/>
                <button onClick={this.addOneHit} className="btn btn-success">Hit</button>

                <table className="table table-striped mt-3">
                    <thead>
                    <tr>
                        <th scope="col">Hits</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.hits}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Goku;