import { Component } from "react";
import DefaultCharacter from "./DefaultCharacter.jsx";
import vegetaPicture from '../../assets/media/vegeta.png';

class Vegeta extends Component {
    render() {

        const {hocState, hocAddOneHit} = this.props;

        return (
            <div className="col">
                <img src={vegetaPicture} alt="Vegeta" height="450px"/>
                <br/>
                <button onClick={hocAddOneHit} className="btn btn-success">Hit</button>

                <table className="table table-striped mt-3">
                    <thead>
                    <tr>
                        <th scope="col">Hits</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{hocState.hits}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DefaultCharacter(Vegeta);