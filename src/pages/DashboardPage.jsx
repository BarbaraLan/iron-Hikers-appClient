import { Link } from 'react-router-dom'
import '../style/Dashboard.css'

function DashboardPage () {
    return (
        <>
        <h6> You are going to this Hikes:  </h6>
        <hr />
        <Link className='JoinHike' to='/join-hike'> Join Hike </Link>
        <Link className='CreateHike' to='/hikes/create'> Create new Hike </Link>
        </>
    )
}
export default DashboardPage