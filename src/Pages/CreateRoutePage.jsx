import '../style/CreateRoutePage.css'
import { useEffect, useState } from 'react';

function CreateRoutePage(props) {
    const {name, city, length, duration, type, description, map, image, routeComments, ratings } = props;
    const addNewRoute = props.addNewRoute;

    return (
        <form className="routes-list" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label> Length:</label>
        <input
          type="text"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Duration:</label>
        <input
          type="time"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label>Type:</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Map URL:</label>
        <input
          type="url"
          value={map}
          onChange={(e) => setMap(e.target.value)}
        />
         <label> Image :</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label> Comments :</label>
        <input
          type="text"
          value={routeComments}
          onChange={(e) => setRouteComments(e.target.value)}
        />
         <label> Ratting :</label>
        <input
          type="text"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            addNewRoute({ name, calories, description, img });
          }}
        >
          Add new Route
        </button>
      </form>

    )

}

export default CreateRoutePage;