import { Link } from "react-router-dom";
import '../style/HikeListCard.css'

function HikeListCard(props) {
  const {
    _id,
    name,
    description,
    date,
    startTime,
    attendees,
    hikeComments
  } = props.hike;

  return (
    <>
      <Link key={date} to={`/hikes/${_id}`}>
        <div className="hikes-box">
          <div className="hike-info">
            <h2>{name}</h2>
            <div className="info-hike-card">
              <p>{description}</p>
              <p>{date}</p>
              <p>{startTime}</p>

              <div>
                {attendees? 
                attendees.map((attendee)=>{
                  return <span key="attendee._id">{attendee.name}, </span>
                })
                :
                <p>No one has signed up yet</p>
                }
              </div>              
              <p>{hikeComments}</p>
            </div>
          </div>
        </div>
      </Link >
    </>
  );
}

export default HikeListCard;
