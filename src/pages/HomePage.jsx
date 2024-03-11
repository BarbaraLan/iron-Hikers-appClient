import '../style/HomePage.css'
import hikingImg from '../assets/hiking-route.jpeg'
import friendsImg from '../assets/finding-friends2.jpeg'
import funImg from '../assets/have-fun.jpeg'

function HomePage() {
    return (
        <>
            <div className='home'> 
                <h1> Welcome to Iron Hikers </h1>
                <p className='introText'> To the best experience ever created </p>
            </div>

            <div className='home2'>
                <h3>instructions</h3>
                <div className='images-instructions'>
                <img className='hiking-img' src={hikingImg} alt="" />
                <img className='friends-img' src={friendsImg} alt="" />
                <img className='fun-img' src={funImg} alt="" />
                </div>

                <div className='explaining-text'>
                    <p> search new routes</p>
                    <p> find new friends</p>
                    <p> have fun! </p>
                </div>
            </div>

        </>
    )
}
export default HomePage;