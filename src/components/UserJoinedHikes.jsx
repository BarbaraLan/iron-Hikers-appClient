import HikeListCard from "./HikeListCard";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";


function UserJoinedHikes() {

    const { userInfo } = useContext(AuthContext)
    const userId = userInfo._id;

    useEffect(()=>{

    }, [])
    return(
        {/*TO-DO - Map the user's joinedHikes array and display a HikeListCard for each with the appropriate info*/}
    )
}

export default UserJoinedHikes;