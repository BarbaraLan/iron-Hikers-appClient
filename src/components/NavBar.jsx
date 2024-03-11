import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import '../style/NavBar.css'

function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


    console.log(isLoggedIn);


    return (
        <nav className="navBar">
            <Link className='homeLink' to='/'> Home </Link>

            {isLoggedIn ? (
                
                <>
                    <Link className='userPageLink' to='/user'> User Page </Link>
                    <Link className='cityLink' to='/city'> City </Link>
                    <Link className='dashLink' to='/dashboard'> Dash </Link>
                </>
            ) : (
                
                <>
                    <Link className='logInLink' to='/login'> Log In </Link>
                    <Link className='routes' to='/routes'> Routes </Link>

                </>
            )}
        </nav>
    );
}

export default NavBar;