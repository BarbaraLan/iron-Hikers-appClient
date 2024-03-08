import Calendar from '../components/Calendar';
import UpcomingHikes from '../components/UpcomingHikes';
import "../style/JoinHikePage.css";

function JoinHikePage() {
    return(
        <div id="container-dashboard">
            <Calendar/>
            <UpcomingHikes/>
        </div>
    )
}

export default JoinHikePage;