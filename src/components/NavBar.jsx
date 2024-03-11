import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import '../style/NavBar.css'

function NavBar () {
    
    const { isLoggedIn } = useContext(AuthContext);

    console.log(isLoggedIn);

   
    return (
        
        <nav className="navBar">
        <Link className='homeLink' to='/'> Home </Link>

            {!isLoggedIn ? (
                
                <Link className='logInLink' to='/login'> Log In </Link>
            ) : (
                
                <Link className='userPageLink' to='/user'> User Page </Link>
            )}

        
        <Link className='city' to='/city'> city </Link>
        <Link className='routes' to='/routes'> Routes </Link>
        </nav>
    )
}
export default NavBar;