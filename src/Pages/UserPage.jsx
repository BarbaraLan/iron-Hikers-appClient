import '../styles/UserPage.css'

function UserPage() {

    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [favhikes, setFavhikes] = useState("");
    const [calorieValue, setCalorieValue] = useState("");
    const [calorieValue, setCalorieValue] = useState("");
    const [calorieValue, setCalorieValue] = useState("");
    
    const getUserInfo = () => {
        axios. 
        .get('http://localhost:5005/user')
        .then((response) => setUser(response.data))
        .catch((error) => error) 
    }

}