import withHitCounter from "./hoc/withHitCounter.jsx";
import gokuPicture from '../../assets/media/goku.png';

const Goku = (props) => {
    const {hocHits, hocAddOneHit, life, } = props;

    const lifeDisplay = life > 0 ? `${life} %` : 'Dead';
    const buttonTextDisplay = life > 0 ? 'Hit' : 'Dead';
    const buttonStyleDisplay = life > 0 ? 'btn-success' : 'btn-danger disabled';

    return (
        <div className="col">
            <img src={gokuPicture} alt="Goku" height="450px"/>
            <br/>
            <button onClick={hocAddOneHit} className={`btn ${buttonStyleDisplay}`}>{buttonTextDisplay}</button>

            <table className="table table-striped mt-3">
                <thead>
                <tr>
                    <th scope="col">Hits</th>
                    <th scope="col">Life</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{hocHits}</td>
                    <td>{lifeDisplay}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default withHitCounter(Goku, 20);