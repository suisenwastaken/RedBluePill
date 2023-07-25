import { Link } from 'react-router-dom';
import styles from './ProfileButton.module.css'
import { VscAccount, VscSignOut } from "react-icons/vsc";


const ProfileButton = ({ isProfileButtonClicked, onClick }) => {

    const logOut = () => {
        if (confirm('Выйти из систесмы?')) {
            localStorage.removeItem('user')
        }
    }

    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
        return (

            <Link to={'/login'}
                className={styles.Profile}
                onClick={onClick}
            >
                <VscAccount size={50} color='white' />
            </Link>
        )
    } else {


        return (
            <Link to={'/'}
                className={styles.Profile}
                onClick={logOut}
            >
                <VscSignOut size={50} color='white' />
            </Link>
        )
    }
}

export default ProfileButton