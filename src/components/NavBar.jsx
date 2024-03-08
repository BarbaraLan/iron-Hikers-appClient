import { Link } from "react-router-dom";
import '../style/NavBar.css'

function NavBar () {
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