import '../style/AboutPage.css'
import BarbiPhoto from '../assets/BarbiPhoto.jpg'
import KumPhoto from '../assets/KumPhoto.jpg'
import GavPhoto from '../assets/GavPhoto.jpg'
import groupPhoto from '../assets/groupPhoto.jpg'

function AboutPage() {
    return (
        <nav className='about-box'>
            <img className='groupPhoto' src={groupPhoto} alt="" />
            <h6>About Us</h6>
            <div className='home3'>

                <div className='generalDiv'>
                    <img className='barbiPhoto' src={BarbiPhoto} alt="" />
                    <h4> Barbara</h4>
                    <p className='about-text'> tech lead / co-founder</p>
                </div>

                <div className='generalDiv'>
                    <img className='kumPhoto' src={KumPhoto} alt="" />
                    <h4> Kumar</h4>
                    <p className='about-text'> ceo / co-founder</p>
                </div>

                <div className='generalDiv'>
                    <img className='gavPhoto' src={GavPhoto} alt="" />
                    <h4> Gavin </h4>
                    <p className='about-text'> sales manager / co-founder</p>
                </div >

            </div >
            </nav>
    )
}

export default AboutPage;