
import { useState, useEffect } from "react";
import axios from "axios";
import '../style/CreateHikePage.css'
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL

function CreateHikePage() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [existingRoutes, setExistingRoutes] = useState([]);
  const [hikes, setHikes] = useState([]);

  const newHike = { name, date, route, startTime, description };

  const getAllRoutes = () => {
    axios
      .get(`${API_URL}/api/routes`)
      .then((response) => {
        setExistingRoutes(response.data);
      })
      .catch((error) => error)
  };

  useEffect(() => {
    getAllRoutes();
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();

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

    axios
      .post(`${API_URL}/hikes/create`, newHike)
      .then((response) => {
        // console.log(response)
        navigate(`/hikes/${response.data._id}`)

        setName("");
        setDate("");
        setRoute("");
        setStartTime("");
        setDescription("");
        getAllHikes();
      })

      .catch((error) => {
        const errorDescription = error.response.data.errorMessage;
        setErrorMessage(errorDescription)
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/api/hikes/${id}`)
      .then((response) => {
        // console.log(response);
        getAllHikes()
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="createHike-box">
      <h2>Add your Hike</h2>
      <div className="createhike-container">
        <form  onSubmit={handleSubmit}>
          <div className="createhike-formcontainer">

          <label className="label3">
            Hike Name
            <input value={name} onChange={(event) => { setName(event.target.value) }} id="setName" type="text" />
          </label>

          <label className="label3">
            Date
            <input value={date} onChange={(event) => { setDate(event.target.value) }} id="setDate" type="date" />
          </label>

          <label className="label3">
            Route
            <select onChange={(event) => { setRoute(event.target.value) }} id="setRoute" type="select" >
              <option value=""> choose your route</option>
              {existingRoutes.map((route) => { return (<option key={route._id} value={route._id}>{route.name}</option>) })}
            </select>
          </label>

          <label className="label3">
            Time
            <input value={startTime} onChange={(event) => { setStartTime(event.target.value) }} id="setTime" type="time" />
          </label>

          <label className="label3">
            Description
            <textarea value={description} onChange={(event) => { setDescription(event.target.value) }} id="setDescription"></textarea>
          </label>
          </div>

          <div className="box-btn">
            <button className='btn-addHike' onClick={handleSubmit} type="submit">Add New Hike</button>
          </div>

          <div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>

        </form>
        {hikes.map((hike) => {
          return (
            <div className="allhikes-section" key={hike._id} >
              <h3>{hike.name}</h3>
              <button className="delete-button" onClick={() => handleDelete(hike._id)}>Delete</button>
            </div>
          );
        })}

      </div>
      </div>
  )
};


export default CreateHikePage;