
import { useState, useEffect } from "react";
import axios from "axios";
import '../style/CreateHikePage.css'


const API_URI = "http://localhost:5005"; //not sure of path name

function CreateHikePage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [route, setRoute] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const [hikes, setHikes] = useState([]);

  const newHike = { name, date, route, time, description, img };
  

  
  const getAllHikes = () => {

    axios
      .get(`${API_URI}`)
      .then((response) => setHikes(response.data))
      .catch((error) => console.log(error));
  };



  useEffect(() => {
    getAllHikes();
  }, []);


  const handleSubmit = (event) => {
    window.alert('your hike was created')
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

      if (time === "") {
        window.alert("Please enter a time");
        return;
      }

    if (description === "") {
        window.description ="Please enter a description";
    }

      if (img === "") {
        newHike.img = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
      }



    axios
      .post(`${API_URL}`, newHike)
      .then((response) => {
        const successDescription = success.response.data.successMessage;
      setSuccessMessage(successDescription);

        setName("");
        setDate(""); 
        setRoute("");
        setTime("");
        setDescription("");
        setImg("");
        getAllHikes();
      })
      
      .catch((error) => {const errorDescription = error.response.data.errorMessage;
      setErrorMessage(errorDescription)});
  };

  const handleDelete = (id) => {
    axios
        .delete(`${API_URL}/${id}`)
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
            <input value={route} onChange={(event) => { setRoute(event.target.value) }} id="setRoute" type="select" />
          </label>

          <label>
            Time
            <input value={time} onChange={(event) => { setTime(event.target.value) }} id="setTime" type="time" />
          </label>

          <label>
            Description
            <textarea value={description} onChange={(event) => { setDescription(event.target.value) }} id="setDescription" cols="20" rows="5"></textarea>
          </label>

          <label>
            Photos
            <input value={img} onChange={(event) => { setImg(event.target.value) }} id="setImg" type="url" />
          </label>

          <div className="newbutton-div">
            <button onClick= {handleSubmit} className='newbutton' type="submit">Add New Hike</button>
          </div>

          <div>
          { errorMessage && <p className="error-message">{errorMessage}</p> }
          { successMessage && <p className="success-message">{successMessage}</p> }
          </div>

        </form>



        {hikes.map((hike) => {
          return (
            <div className="allhikes-section" key={hike.id} >
              <h3>{hike.name}</h3>

              <button className="delete-button" onClick={() => handleDelete(hike.id)}>Delete</button>

            </div>
          );
        })}

      </div>
    </>
  )};


export default CreateHikePage;