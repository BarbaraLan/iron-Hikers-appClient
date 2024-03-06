import { Link } from "react-router-dom";
import '../style/NavBar.css'

function NavBar () {
    return (
        <nav className="navBar">
        <Link className='homeLink' to='/'> Home </Link>
        </nav>
    )
}
export default NavBar;