import { useState } from 'react';
import { login } from '../../api/authentication';
import CustomButton from '../../components/CustomButton';
import ProfileInput from '../../components/ProfileInput';
import styles from './LoginScreen.module.css';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const LoginScreen = () => {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async () => {
        const authResult = await login(userName, userPassword);
        if (authResult.isLoggedIn) {
            setLoggedIn(true);
            localStorage.setItem("user", JSON.stringify({ id: 1, username: userName, role: 'admin' }))
            navigate(`/1`);
        }
    };

    return (
        <motion.div 
        className={styles.Login}

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        
        {/* 
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}> */}

            <div className={styles.Card}>

                <div className={styles.Image}></div>

                <div className={styles.InputArea}>

                    <p className={styles.Title}>Войдите</p>

                    <ProfileInput
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        text="Ваш логин"
                    />

                    <ProfileInput
                        onChange={e => setUserPassword(e.target.value)}
                        value={userPassword}
                        text="Ваш пароль"
                        type="password"
                    />

                    <CustomButton text='Войти' onClick={handleLogin} />

                </div>

            </div>

        </motion.div>
    )
}

export default LoginScreen