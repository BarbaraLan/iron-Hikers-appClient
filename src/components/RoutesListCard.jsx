import { Link } from 'react-router-dom';
import '../style/RoutesListCard.css'

function RoutesListCard(props) {
    const { name, city, length, image, ratings } = props.route;

    return (
            <div>
                <img className= 'card-img' src={image} alt="" />
                <h7 className='card-title'> {name} </h7>
                <p className='card-city'> {city}</p>
                <p className='card-length'> {length}</p>
                <p className='card-rating'> {ratings}</p>
            </div>
    )
}

export default RoutesListCard;