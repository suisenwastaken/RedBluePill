import { useEffect, useState } from 'react'

import styles from './QuestionScreen.module.css'

import QuestionAnswer from "../../components/QuestionAnswer"
import ProfileButton from '../../components/ProfileButton/ProfileButton'
import CustomButton from '../../components/CustomButton'
import { getQuestion } from '../../api/getQuestion'
import { sendAnswer } from '../../api/sendAnswer'
import { useNavigate, useParams } from 'react-router-dom'
import NewQuestionButton from '../../components/NewQuestionButton'
import {motion} from 'framer-motion'

const QuestionScreen = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [isResultShown, setIsResultShown] = useState(false)
    const [firstAnswer, setFirstAnswer] = useState();
    const [secondAnswer, setSecondAnswer] = useState();
    const [firstPic, setFirstPic] = useState();
    const [secondPic, setSecondPic] = useState();
    const [firstPercent, setFirstPercent] = useState();
    const [secondPercent, setSecondPercent] = useState();

    useEffect(() =>{
        const axiosData = async () =>{
            const result = await getQuestion(id)

            setFirstAnswer(result.firstTitle)
            setSecondAnswer(result.secondTitle)
            setFirstPic(result.firstPic)
            setSecondPic(result.secondPic)
            setFirstPercent(result.firstPercent)
            setSecondPercent(result.secondPercent)
        }
        axiosData()
    },[]);

    const showAndSendResultBlue = async () => {
        const sendResult = await sendAnswer(Number(id), 0)
        if(sendResult.isPosted === true)
            setIsResultShown(true)
    }

    const showAndSendResultRed = async () => {
        const sendResult = await sendAnswer(Number(id), 1)
        if(sendResult.isPosted === true)
            setIsResultShown(true)
    }

    const nextQuestion = () =>{
        navigate(`/${Number(id) + Number(1)}`);
        setIsResultShown(false)
    }

    return (

        <motion.div 
        className={styles.Screen}
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 0.3}}}
        exit={{opacity: 0}}>

        {/* initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}> */}

            <img src='logo.png' className={styles.logo}></img>

            <NewQuestionButton/>
            <ProfileButton/>

            <div className={styles.Answers}>
                <QuestionAnswer
                    isResultShown={isResultShown}
                    onClick={showAndSendResultBlue}
                    title={firstAnswer}
                    background={firstPic}
                    backgroundColor={'blue'}
                    percent={firstPercent}
                />
                <QuestionAnswer
                    isResultShown={isResultShown}
                    onClick={showAndSendResultRed}
                    title={secondAnswer}
                    background={secondPic}
                    backgroundColor={'red'}
                    percent={secondPercent}
                />
            </div>

            <CustomButton
                style = {{

                    opacity: !isResultShown ? "0" : "1",
                    transition: "1s",
                    pointerEvents: !isResultShown ? 'none' : 'auto'
                }}
                text='Далее'
                className={styles.NextQuestion}
                isResultShown = {isResultShown}
                onClick={nextQuestion}
            />

        </motion.div>

    )
}

export default QuestionScreen