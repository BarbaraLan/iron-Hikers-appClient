import { Link } from 'react-router-dom';
import '../style/RoutesListCard.css'

function RoutesListCard(props) {
    const { name, city, length, image, ratings } = props.route;

    return (
            <div className='routes-list'>
                <div>
                <img className= 'card-img' src={image} alt="" />
                </div>
                <h9 className='card-title'> {name} </h9>
                <div className='routes-info'>
                <p className='card-city'> {city}</p>
                <p className='card-length'> {length}</p>
                <p className='card-rating'> {ratings}</p>
                </div>
            </div>
    )
}

export default RoutesListCard;