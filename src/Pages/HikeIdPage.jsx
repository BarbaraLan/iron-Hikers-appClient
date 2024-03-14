import "../style/HikeIdPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import "../style/HikeIdPage.css";

const API_URL = import.meta.env.VITE_API_URL;

function HikeIdPage(props) {
  const [existingRoute, setExistingRoute] = useState("");
  const [hikesJoined, setHikesJoined] = useState("");
  const [attendees, setAttendees] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const hikeId = useParams().hikeId;
  const { name, description, date, route, hikeComments, createdBy, image } =
    existingRoute;
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo?._id;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const hikeIdCall = () => {
    console.log("This is the hike id", hikeId);
    axios
      .get(`${API_URL}/api/hikes/${hikeId}`)
      .then((response) => {
        setExistingRoute(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        error;
      });
  };

  //   PUT - add user to attendees array (hikes)
  const handleJoin = (event) => {
    navigate("/dashboard");
    event.preventDefault();

    axios
      .put(`${API_URL}/api/hikes/join/${hikeId}`, { userId })
      .then((response) => {
        setHikesJoined(response.data);
      })
      .catch((error) => {
        error;
      });
  };

  const handleEditHike = ()=>{

  }

  const handleDeleteHike = ()=>{
    axios.delete(`${API_URL}/api/hikes/delete/${hikeId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}`}
    })
    .then((response)=>{
        navigate("/dashboard");
    })
    .catch((error) => {
        const errorDescription = error.data.errorMessage;
        setErrorMessage(errorDescription)
      });
  }
  //  TO-DO post user id to attendees

  const addAttendees = () => {
    axios
      .post(`${API_URL}/api/user/${userInfo._id}`)
      .then((response) => {
        setAttendees(response.data);
      })
      .catch((error) => {
        error;
      });
  };
  //   TO-DO post hike ID into users hike joined array

  const joinedHikes = () => {
    axios
      .post(`${API_URL}/api/user/${userInfo._id}`)
      .then((response) => {
        setAttendees(response.data);
      })
      .catch((error) => {
        error;
      });
  };

  useEffect(() => {
    hikeIdCall();
  }, []);

  return (
    <div className="hike-box">
      <div className="hikeImg">
        <img src={image} alt="" />
      </div>
      <h3> {name} </h3>
      <div className="hikeInfoId">
        <p> Description: {description}</p>
        <p> Route: {route?.name} Date: {date}</p>
        <p> Created By:{createdBy?.name}</p>
        <p>Participants:</p>
        {existingRoute.attendees?.map((user) => {
          return <div key={user._id}> {user.name} </div>;
        })}
        <p> comments: {hikeComments}</p>
        <img width={"300px"} src={route?.image} alt={name} />
      </div>
      {createdBy?._id === userId && (
        <>
          <button className="hike-edit-btn" onClick={handleEditHike}>
            Edit Hike
          </button>
          <button className="hike-delete-btn" onClick={handleDeleteHike}>
            Delete Hike
          </button>
        </>
      )}
      {/*TO-DO: Conditional rendering - if the logged-in user is already going, display an "unjoin" button that removes them from the hike's attendees array */}
      <button className="join-btn" onClick={handleJoin}>
        JOIN
      </button>
    </div>
  );
}
export default HikeIdPage;
