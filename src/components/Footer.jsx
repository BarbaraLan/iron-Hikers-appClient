import { Link } from "react-router-dom";
import '../style/Footer.css'

function Footer() {
    return (
        <>
            <nav className="footer">
                <Link className='aboutUs' to='/about'> About </Link>
                <a href="https://github.com/BarbaraLan"> gitHub</a>
            </nav>

        </>
    )
}
export default Footer;