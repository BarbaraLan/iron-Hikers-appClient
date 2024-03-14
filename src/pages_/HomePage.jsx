import '../style/HomePage.css'
import hikingImg from '../assets/hiking-route.jpeg'
import friendsImg from '../assets/finding-friends.jpeg'
import funImg from '../assets/havefun.avif'

function HomePage() {
    return (
        <>
            <div className='home'>
               
            </div>

            <div className='home2'>
                <h3>instructions</h3>
                <div className='images-instructions'>

                    <div className='explaining-text'>
                        <img className='hiking-img' src={hikingImg} alt="" />
                        <p> search new routes</p>
                    </div>

                    <div className='explaining-text'>
                        <img className='friends-img' src={friendsImg} alt="" />
                        <p> find new friends</p>
                    </div>

                    <div className='explaining-text'>
                        <img className='fun-img' src={funImg} alt="" />
                        <p> have fun! </p>
                    </div>
                </div>
            </div>
            </>


    )
}
export default HomePage;