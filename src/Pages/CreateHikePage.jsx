
import { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/CreateHikePage.css'


const API_URI = "http://localhost:5005"; //not sure of path name

function CreateHikePage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [route, setRoute] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

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
        console.log(response);

        setName("");
        setDate(""); 
        setRoute("");
        setTime("");
        setDescription("");
        setImg("");
        getAllHikes();

      })
      .catch((error) => console.log(error));
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
          <h2>Add your Hike</h2>

          <label >
            Hike Name
            <input value={name} onChange={(event) => { setName(event.target.value) }} id="setName" type="text" />
          </label>

          <label>
            Date
            <input value={date} onChange={(event) => { setDate(event.target.value) }} id="setDate" type="number" />
          </label>

          <label>
            Route
            <input value={route} onChange={(event) => { setRoute(event.target.value) }} id="setRoute" type="text" />
          </label>

          <label>
            Time
            <input value={time} onChange={(event) => { setTime(event.target.value) }} id="setTime" type="number" />
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
            <button className='newbutton' type="submit">Add New Hike</button>
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