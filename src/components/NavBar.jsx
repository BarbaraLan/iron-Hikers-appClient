import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import userLogo from '../assets/userLogo.png'
import logo from '../assets/logo-mountain.png'

import '../style/NavBar.css'

function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="navBar">

            {isLoggedIn ? (
                <>
                    <Link className='dashLink' to='/dashboard'> <img id='logo' src={logo} alt="" />
                    </Link>
                    {
                        !showMenu && <button onClick={() => setShowMenu(true)} className="open-btn">&#9776; </button>
                    }
                    <div id="menu-sidebar" className={showMenu ? 'open-menu' : 'close-menu'} >
                        <Link className='user-pic' to='/user'> <img className='userPic' src={userLogo} alt="" /></Link>
                        <Link className='city-link' to='/city'> City </Link>
                        <Link className='routes' to='/routes'> Routes </Link>
                        <button onClick={() => setShowMenu(false)} className="close-btn">&times;</button>
                    </div>
                    <div className="close-menu" ></div>
                </>
            ) : (
                    <>
                        <Link className='logo-link' to='/'> <img id='logo' src={logo} alt="" /> </Link>
                        <Link id='logInLink' to='/login'> Log In </Link>
                    </>
                )}
        </nav>
    );
}

export default NavBar;