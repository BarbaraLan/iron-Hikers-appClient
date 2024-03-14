import "../style/HikeIdPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import "../style/HikeIdPage.css";

const API_URL = import.meta.env.VITE_API_URL;

function HikeIdPage(props) {
  const [thisHike, setThisHike] = useState("");
  const [routeList, setRouteList] = useState("");
  const [hikesJoined, setHikesJoined] = useState("");
  const [attendees, setAttendees] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [route, setRoute] = useState("");
   const [date, setDate] = useState("");
   const [startTime, setStartTime] = useState("");
   const [image, setImage] = useState("");

  const hikeId = useParams().hikeId;
  const {createdBy, hikeComments} = thisHike;

  const { userInfo } = useContext(AuthContext);
  const userId = userInfo?._id;

  const navigate = useNavigate();

  const getAllRoutes = () => {
    axios
      .get(`${API_URL}/api/routes`)
      .then((response) => {
        setRouteList(response.data);
      })
      .catch((error) => error);
  };

  const hikeIdCall = () => {
    console.log("This is the hike id", hikeId);
    axios
      .get(`${API_URL}/api/hikes/${hikeId}`)
      .then((response) => {
        setThisHike(response.data);
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

  const handleEditHikeFormToggle = (event) => {
    event.preventDefault();
    setShowEditForm(!showEditForm);
  };

  const handleEditHike = () => {
    if (name === "") {
        window.alert("Please enter a name")
        return;
      }
  
      if (date === "") {
        window.alert("Please enter a date amount");
        return;
      }
  
      if (route === "") {
        window.alert("Please enter a route");
        return;
      }
  
      if (startTime === "") {
        window.alert("Please enter a time");
        return;
      }
  
      if (description === "") {
        window.description = "Please enter a description";
      }
  
      if (image === "") {
        window.description = "Please enter an image";
      }
  
      const updatedHike = { clientId: userId, name, description, route, date, startTime, image };
      console.log(updatedHike);

      axios
        .put(`${API_URL}/api/hikes/edit/${hikeId}`, updatedHike)
        .then((response) => {
          navigate(`/hikes/${response.data._id}`)
  
          return
        })
  
        .catch((error) => {
          const errorDescription = error.data.errorMessage;
          setErrorMessage(errorDescription)
        });
    };


  const handleDeleteHike = () => {
    axios
      .delete(`${API_URL}/api/hikes/delete/${hikeId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorDescription = error.data.errorMessage;
        setErrorMessage(errorDescription);
      });
  };

  useEffect(() => {
    hikeIdCall();
    getAllRoutes();
  }, []);

  useEffect(()=>{
    setName(thisHike.name);
    setDescription(thisHike.description);
    setRoute(thisHike.route);
    setDate(thisHike.date);
    setStartTime(thisHike.startTime);
    setImage(thisHike.image);
    console.log(thisHike)

  }, [thisHike])

  return (
    <div className="hike-box">
      <div className="hikeImg">
        <img src={image} alt="" />
      </div>
      <h3> {name} </h3>
      <div className="hikeInfoId">
        <p> Description: {description}</p>
        <p> Route: {route?.name}</p>
        <p>Date: {date} - Time: {startTime}</p>
        <p> Created By:{createdBy?.name}</p>
        <p>Participants:</p>
        {thisHike.attendees?.map((user) => {
          return <div key={user._id}> {user.name} </div>;
        })}
        <p> comments: {hikeComments}</p>
        <img width={"300px"} src={route?.image} alt={name} />
      </div>
      {createdBy?._id === userId && (
        <>
          {showEditForm ? (
            <div className="createhike-container">
              <form onSubmit={handleEditHike}>
                <div className="createhike-formcontainer">
                  <label className="label3">
                    Hike Name
                    <input
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      id="setName"
                      type="text"
                    />
                  </label>

                  <label className="label3">
                    Date
                    <input
                      value={date}
                      onChange={(event) => {
                        setDate(event.target.value);
                      }}
                      id="setDate"
                      type="date"
                    />
                  </label>

                  <label className="label3">
                    Route
                    <select
                    value={route}
                      onChange={(event) => {
                        setRoute(event.target.value);
                      }}
                      id="setRoute"
                      type="select"
                    >
                      <option value=""> choose your route</option>
                      {routeList.map((route) => {
                        return (
                          <option key={route._id} value={route._id}>
                            {route.name}
                          </option>
                        );
                      })}
                    </select>
                  </label>

                  <label className="label3">
                    Time
                    <input
                      value={startTime}
                      onChange={(event) => {
                        setStartTime(event.target.value);
                      }}
                      id="setTime"
                      type="time"
                    />
                  </label>

                  <label className="label3">
                    Description
                    <textarea
                      value={description}
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                      id="setDescription"
                    ></textarea>
                  </label>

                  <label className="label3">
                    Image URL
                    <input
                      type="url"
                      value={image}
                      onChange={(event) => {
                        setImage(event.target.value);
                      }}
                      id="setImage"
                    ></input>
                  </label>
                </div>

                <div className="box-btn">
                  <button
                    className="btn-addHike"
                    type="submit"
                  >
                    Update Hike Information
                  </button>
                </div>

                <div>
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <button
              className="toggle-edit-form-btn"
              onClick={handleEditHikeFormToggle}
            >
              Edit Hike
            </button>
          )}

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
