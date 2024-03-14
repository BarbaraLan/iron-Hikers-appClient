import "../style/RouteIdPage.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = import.meta.env.VITE_API_URL;

function RouteIdPage(props) {
  const [thisRoute, setThisRoute] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [length, setLength] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [map, setMap] = useState("");
  const [image, setImage] = useState("");

  const { userInfo } = useContext(AuthContext);
  const userId = userInfo?._id;

  const routeId = useParams().routeId;
  const navigate = useNavigate();

  const { routeComments, addedBy, ratings } = thisRoute;

  const routeIdCall = () => {
    axios
      .get(`${API_URL}/api/routes/${routeId}`)
      .then((response) => {
        setThisRoute(response.data);
      })
      .catch((error) => {
        error;
      });
  };

  const handleEditRouteFormToggle = (event) => {
    event.preventDefault();
    setShowEditForm(!showEditForm);
  };

  const handleEditRoute = () => {
    if (name === "") {
      window.alert("Please enter a name");
      return;
    }

    if (city === "") {
      window.alert("Please select a city");
      return;
    }

    if (length === "") {
      window.alert("Please enter length");
      return;
    }

    if (duration === "") {
      window.alert("Please enter duration");
      return;
    }

    if (type === "") {
      window.alert("Please enter type");
      return;
    }

    if (description === "") {
      window.description = "Please enter a description";
    }

    if (map === "") {
      window.description = "Please enter a map";
    }

    if (image === "") {
      window.description = "Please enter a image";
    }

    const updatedRoute = {
      name,
      city,
      length,
      duration,
      intensity,
      type,
      description,
      map,
      image,
      clientId: userId
    };

    axios
      .put(`${API_URL}/api/routes/edit/${routeId}`, updatedRoute)
      .then((response) => {
        // navigate(`/routes/${response.data._id}`);
        setShowEditForm(false);
        return;
      })
      .catch((error) => {
        const errorDescription = error.response.data.errorMessage;
        setErrorMessage(errorDescription);
      });
  };

  const handleDeleteRoute = () => {
    axios
      .delete(`${API_URL}/api/routes/delete/${routeId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        navigate("/routes");
        console.log(response.data);
      })
      .catch((error) => {
        const errorDescription = error.data.errorMessage;
        setErrorMessage(errorDescription);
      });
  };

  useEffect(() => {
    routeIdCall();
  }, []);

  useEffect(() => {
    setName(thisRoute.name);
    setCity(thisRoute.city);
    setLength(thisRoute.length);
    setDuration(thisRoute.duration);
    setIntensity(thisRoute.intensity);
    setType(thisRoute.type);
    setDescription(thisRoute.description);
    setMap(thisRoute.map);
    setImage(thisRoute.image);
  }, [thisRoute]);

  return (
    <div className="route-id-box">
      <img className="route-id-img" src={image} alt="" />

      <div className="complete-id-info">
        <div className="title-back">
          <h3> {name} </h3>
        </div>

        <div className="route-id-info">
          <p> {city}</p>
          <p> {length}</p>
          <p> {duration}</p>
          <p> {intensity}</p>
          <p> {type}</p>
          <p> {description}</p>
          <img className="route-id-map" src={map} alt="" />
          <p> {routeComments}</p>
          <p> {addedBy}</p>
          <p> {ratings}</p>
        </div>
      </div>
      {addedBy === userId && (
        <>
          {showEditForm ? (
            <div className="create-routeId-container">
              <form className="routes-id-form" onSubmit={handleEditRoute}>
                <label className="label3">
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>

                <label className="label3">
                  {" "}
                  City:
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>

                <label className="label3">
                  {" "}
                  Length:
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </label>

                <label className="label3">
                  Duration:
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </label>

                <label className="label3">
                  Intensity:
                  <input
                    type="text"
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                  />
                </label>

                <label className="label3">
                  Type:
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </label>

                <label className="label3">
                  Description:
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>

                <label className="label3">
                  Map URL:
                  <input
                    type="url"
                    value={map}
                    onChange={(e) => setMap(e.target.value)}
                  />
                </label>

                <label className="label3">
                  {" "}
                  Image :
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </label>
              </form>

              <button className="btn" type="submit" onClick={handleEditRoute}>
                Update Route
              </button>
            </div>
          ) : (
            <button
              className="toggle-edit-form-btn"
              onClick={handleEditRouteFormToggle}
            >
              Edit Route
            </button>
          )}

          <button className="hike-delete-btn" onClick={handleDeleteRoute}>
            Delete Route
          </button>
        </>
      )}
    </div>
  );
}
export default RouteIdPage;
