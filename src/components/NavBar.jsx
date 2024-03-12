import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import '../style/NavBar.css'

function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


    // console.log(isLoggedIn);


    return (
        <nav className="navBar">

            {isLoggedIn ? (
                
                <>
                    <Link className='dashLink' to='/dashboard'> Home </Link>
                    <Link className='dashLink' to='/city'> City </Link>
                    <Link className='routes' to='/routes'> Routes </Link>
                    <Link className='userPageLink' to='/user'> User Page </Link>
                </>
            ) : 
            
            (
                
                <>
                    <Link className='dashLink' to='/'> Home </Link>
                    <Link className='routes' to='/routes'> Routes </Link>
                    <Link className='logInLink' to='/login'> Log In </Link>

                </>
            )}
        </nav>
    );
}

export default NavBar;