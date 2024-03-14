import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import userLogo from '../assets/userLogo.png'
import logo from '../assets/logo.png'


import '../style/NavBar.css'

function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


    // console.log(isLoggedIn);


    return (
        <nav className="navBar">

            {isLoggedIn ? (
                
                <>
                    <Link className='dashLink' to='/dashboard'> <img  id='logo' src={logo} alt="" /> </Link>
                    <Link className='dashLink' to='/city'> City </Link>
                    <Link className='routes' to='/routes'> Routes </Link>
                    <Link to='/user'> <img className='userPic' src={userLogo} alt="" /></Link>
                </>
            ) : 
            
            (
                
                <>
                    <Link className='logo-link' to='/'> <img  id='logo' src={logo} alt="" /> </Link>
                    <Link id='logInLink' to='/login'> Log In </Link>

                </>
            )}
        </nav>
    );
}

export default NavBar;