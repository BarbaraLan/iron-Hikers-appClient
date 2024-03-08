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
        <Link className='city' to='/city'> city </Link>
        <Link className='routes' to='/routes'> Routes </Link>
        </nav>
    )
}
export default NavBar;