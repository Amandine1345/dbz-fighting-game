import PropTypes from "prop-types";

const TableScore = ({hits, life}) => {
    const lifeDisplay = life > 0 ? `${life} %` : 'Dead';

    return (
        <table className="table table-striped mt-3">
            <thead>
            <tr>
                <th scope="col">Hits</th>
                <th scope="col">Life</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{hits}</td>
                <td>{lifeDisplay}</td>
            </tr>
            </tbody>
        </table>
    )
}

TableScore.propTypes = {
    hits: PropTypes.number.isRequired,
    life: PropTypes.number.isRequired,
}

export default TableScore;