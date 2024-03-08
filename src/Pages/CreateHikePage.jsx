
import { useState, useEffect } from "react";
import axios from "axios";
import '../style/CreateHikePage.css'
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005"; //not sure of path name

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
      .get('http://localhost:5005/api/routes')
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
      window.alert("Please enter a route length");
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
      .post(`${API_URL}/api/hikes/create`, newHike)
      .then((response) => {
        console.log(response)
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
        console.log(response);
        getAllHikes()
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="createhike-container">
        <form className="createhike-formcontainer" onSubmit={handleSubmit}>
          <h6>Add your Hike</h6>

          <label >
            Hike Name
            <input value={name} onChange={(event) => { setName(event.target.value) }} id="setName" type="text" />
          </label>

          <label>
            Date
            <input value={date} onChange={(event) => { setDate(event.target.value) }} id="setDate" type="date" />
          </label>

          <label>
            Route
            <select onChange={(event) => { setRoute(event.target.value) }} id="setRoute" type="select" >
              <option value=""> choose your route</option>
              {existingRoutes.map((route) => { return (<option key={route._id} value={route._id}>{route.name}</option>) })}
            </select>
          </label>

          <label>
            Time
            <input value={startTime} onChange={(event) => { setStartTime(event.target.value) }} id="setTime" type="time" />
          </label>

          <label>
            Description
            <textarea value={description} onChange={(event) => { setDescription(event.target.value) }} id="setDescription" cols="20" rows="5"></textarea>
          </label>

          <div className="newbutton-div">
            <button onClick={handleSubmit} className='newbutton' type="submit">Add New Hike</button>
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
    </>
  )
};


export default CreateHikePage;