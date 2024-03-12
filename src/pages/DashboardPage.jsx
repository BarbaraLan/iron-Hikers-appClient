import { Link } from 'react-router-dom'
import '../style/Dashboard.css'

function DashboardPage () {
    return (
        <div className='completeDash'>
            <h2> Welcome!
            <br></br>
            You can go on these Hikes:  </h2>
        
        <div className='dash-box'>
        <Link className='JoinHike' to='/join-hike'> Join Hike </Link>
        <Link className='CreateHike' to='/hikes/create'> Create new Hike </Link>
        </div>
        </div>
    )
}
export default DashboardPage