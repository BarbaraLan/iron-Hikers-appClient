import { Link } from 'react-router-dom';
import '../style/RoutesListCard.css'

function RoutesListCard(props) {
    const { name, city, length, image, ratings } = props.route;

    return (
        <Link>
            <div>
                <img src={image} alt="" />
                <h6> {name} </h6>
                <p> {city}</p>
                <p> {length}</p>
                <p> {ratings}</p>
            </div>
        </Link>
    )
}

export default RoutesListCard;