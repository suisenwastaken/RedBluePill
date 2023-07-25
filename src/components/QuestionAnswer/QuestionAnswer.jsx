import styles from './QuestionAnswer.module.css'
import QuestionPercent from '../QuestionPercent/QuestionPercent'

const QuestionAnswer = ({
    onClick,
    title,
    background,
    backgroundColor,
    isResultShown,
    percent
}) => {


    return (
        <div
            onClick={onClick}
            className={[styles.AnswerCard, backgroundColor === 'red' ? styles.red : styles.blue, isResultShown === true ? styles.shown : ''].join(' ')}
            style={{backgroundImage: `url(${background})`, 
                    backgroundColor: isResultShown? 'grey' : '',
                    backgroundBlendMode: isResultShown? 'multiply': '',
                    cursor: isResultShown? 'default': '',
                    filter: isResultShown? 'none': ''}}
        >
            {/* {isResultShown && <QuestionPercent percent={percent} />} */}
            <QuestionPercent percent={percent} isResultShown={isResultShown} />
            <div className={styles.Title}>{title}</div>

        </div>
    )
}

export default QuestionAnswer
