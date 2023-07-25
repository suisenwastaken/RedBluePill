import { Link } from 'react-router-dom';
import styles from './NewQuestionButton.module.css'
import { VscAdd } from "react-icons/vsc";


const NewQuestionButton = ({isProfileButtonClicked, onClick}) => {

    const user = JSON.parse(localStorage.getItem('user'))
    if (user?.role === 'admin') {

    return(

        <Link to={'/admin'}
        className = {styles.Add}
        onClick={onClick}
        >
            <VscAdd size={50} color='white'/>
        </Link>
    )
    }
}

export default NewQuestionButton