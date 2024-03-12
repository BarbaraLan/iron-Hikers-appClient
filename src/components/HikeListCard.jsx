import { Link } from "react-router-dom";
import '../style/HikeListCard.css'

function HikeListCard(props) {
  const {
    _id,
    name,
    description,
    route,
    date,
    startTime,
    attendees,
    hikeComments,
  } = props.hike;

  return (
    <Link key={date} to={`/hikes/${_id}`}>
      <div className="hike-card">
        <div className="hike-image">
          <img src="" alt="" />
        </div>
        <div className="hike-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{route.name}</p>
          <p>{date}</p>
          <p>{startTime}</p>
          <p>{attendees}</p>
          <p>{hikeComments}</p>
        </div>
      </div>
    </Link>
  );
}

export default HikeListCard;
