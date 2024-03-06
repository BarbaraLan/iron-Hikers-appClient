import '../style/AboutPage.css'
import BarbiPhoto from '../assets/BarbiPhoto.jpg'
import KumPhoto from '../assets/KumPhoto.jpg'
import GavPhoto from '../assets/GavPhoto.jpg'
import groupPhoto from '../assets/groupPhoto.jpg'

function AboutPage() {
    return (
        <>
            <img className='groupPhoto' src={groupPhoto} alt="" />
            <h4>About Us</h4>
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
        </>
    )
}

export default AboutPage;