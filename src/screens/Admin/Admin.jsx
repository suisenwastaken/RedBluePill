import styles from './Admin.module.css'
import ProfileInput from '../../components/ProfileInput'
import CustomButton from '../../components/CustomButton'
import { useState } from 'react'
import { postQuestion } from '../../api/postQuestion'
import {motion} from 'framer-motion'


const Admin = () => {

    const [firstAnswer, setFirstAnswer] = useState();
    const [secondAnswer, setSecondAnswer] = useState();
    const [firstPic, setFirstPic] = useState();
    const [secondPic, setSecondPic] = useState();

    const emptyInputs = () =>{
        setFirstAnswer('');
        setSecondAnswer('');
        setFirstPic('');
        setSecondPic('');
    }

    const handlePost = async () => {
        const authResult = await postQuestion(firstAnswer, secondAnswer, firstPic, secondPic);
        if (authResult.isPosted) {
            alert("Запись добавлена!")
            emptyInputs();
        }
    };

    return (
        <motion.div 
        className={styles.Admin}
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>

        {/* 
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}> */}

            <div className={styles.Card}>

                <p className={styles.Title}>Добавление записи</p>

                <div className={styles.InputArea}>

                    <ProfileInput
                        onChange={e => setFirstAnswer(e.target.value)}
                        value={firstAnswer}
                        type="text"
                        text="Первый ответ"
                    />

                    <ProfileInput
                        onChange={e => setFirstPic(e.target.value)}
                        value={firstPic}
                        text="Картинка"
                        type="text"
                    />

                    <ProfileInput
                        onChange={e => setSecondAnswer(e.target.value)}
                        value={secondAnswer}
                        type="text"
                        text="Второй ответ"
                    />

                    <ProfileInput
                        onChange={e => setSecondPic(e.target.value)}
                        value={secondPic}
                        text="Картинка"
                        type="text"
                    />

                </div>

                <CustomButton text='Добавить' onClick={handlePost} />

            </div>

        </motion.div>
    )

}

export default Admin