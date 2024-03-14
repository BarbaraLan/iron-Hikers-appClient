import HikeListCard from "./HikeListCard";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

function UserJoinedHikes() {
    const [userHikes, setUserHikes] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo._id;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/user-hikes/${userId}`)
      //*TO-DO: Get the next X upcoming hikes, sorted chronologically,
      //* that the user has signed up for
      //* This requires the Date, which needs to be uplifted from the Calendar
      //* component
      //.get(`${API_URL}/api/hikes/user-upcoming/:date`)
      
      .then((response) => {
        console.log(response.data)
        setUserHikes(response.data)
        console.log(userHikes)
      })
      .catch((error) => error);
  }, []);
  return (
    <>
      {/*TO-DO - Map the user's joinedHikes array and display a HikeListCard for each with the appropriate info*/}
      <div>
          <h2>Your upcoming hikes</h2>
        {userHikes ? (
          userHikes.map((hike) => {
            return <HikeListCard key={hike._id} hike={hike}></HikeListCard>
          })
        ) : (
          <p>You haven't joined any hikes!</p>
        )}
      </div>
    </>
  );
}

export default UserJoinedHikes;
