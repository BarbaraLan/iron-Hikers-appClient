import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import '../style/NavBar.css'

function NavBar () {
    const value = useContext(AuthContext);
    console.log(value)
    return (
        <nav className="navBar">
        <Link className='homeLink' to='/'> Home </Link>
        <Link className='LogIn' to='/login'> LogIn </Link>
        </nav>
    )
}
export default NavBar;