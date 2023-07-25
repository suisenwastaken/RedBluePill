import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/CustomButton'
import styles from './Greetings.module.css'
import {motion} from 'framer-motion'


const Greetings = () => {

    const navigate = useNavigate()
    const startGame = () => {
        navigate('./1')
    }

    return (

        <motion.div 
        className={styles.Greetings}

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        
        {/* initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}> */}

            <img src="logo.png" className={styles.logo} />

            <div className={styles.Info}>

                <div className={styles.Text}>

                    <h1 className={styles.HeadText}>Добро пожаловать в RedBluePill!</h1>

                    <p className={styles.Description}>В этой игре вам нужно будет выбрать один из двух вариантов ответа <br /> Что же выбрало общество? - узнаете позже</p>


                </div>

                <CustomButton
                    text={'Начать'}
                    onClick={startGame}
                />

            </div>

        </motion.div>
    )

}

export default Greetings