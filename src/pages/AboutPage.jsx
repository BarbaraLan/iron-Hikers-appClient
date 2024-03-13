import '../style/AboutPage.css'
import BarbiPhoto from '../assets/BarbiPhoto.jpg'
import KumPhoto from '../assets/KumPhoto.jpg'
import GavPhoto from '../assets/GavPhoto.jpg'
import groupPhoto from '../assets/groupPhoto.jpg'

function AboutPage() {
    return (
        <nav className='about-box'>
            <img className='groupPhoto' src={groupPhoto} alt="" />
            <p className='about-us'>About Us</p>
            <div className='home3'>

                <div className='barbiDiv'>
                    <img className='barbiPhoto' src={BarbiPhoto} alt="" />
                    <h5> Barbara</h5>
                </div>

                <div className='KumarDiv'>
                    <img className='kumPhoto' src={KumPhoto} alt="" />
                    <h5> Kumar</h5>
                </div>

                <div className='GavinDiv'>
                    <img className='gavPhoto' src={GavPhoto} alt="" />
                    <h5> Gavin </h5>
                </div >

            </div >
            </nav>
    )
}

export default AboutPage;