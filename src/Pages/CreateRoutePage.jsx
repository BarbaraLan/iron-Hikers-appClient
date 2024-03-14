import "../style/CreateRoutePage.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = "http://localhost:5005/";

function CreateRoutePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [length, setLength] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [map, setMap] = useState("");
  const [image, setImage] = useState("");


  const [errorMessage, setErrorMessage] = useState(undefined);

  const { userInfo } = useContext(AuthContext);
  const userId = userInfo._id;
  

  const getUserInfo = () => {
    axios
      .get(`http://localhost:5005/api/user/${userInfo._id}`)
      .then((response) => {
        setCity(response.data.city);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

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

    const newRoute = {
      name,
      city,
      length,
      duration,
      intensity,
      type,
      description,
      map,
      image,
      userId
    };

    axios
      .post(`${API_URL}api/routes/create`, newRoute)
      .then((response) => {
        //console.log(response)
        console.log(response.data)
        navigate(`/routes/${response.data._id}`);

        return;
      })

      .catch((error) => {
        const errorDescription = error.data.errorMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="create-route-box">
      <div className="create-routeId-container">
        <h2> Create new route</h2>
        <form className="routes-id-form" onSubmit={handleSubmit}>
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

        <button className="btn" type="submit" onClick={handleSubmit}>
          Add new Route
        </button>
      </div>
    </div>
  );
}

export default CreateRoutePage;
