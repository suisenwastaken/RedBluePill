import styles from './QuestionPercent.module.css'

const QuestionPercent = ({ percent, isResultShown }) => {
    return (
        <div className={styles.Text}
        style={{
            opacity: !isResultShown ? "0" : "1",
            transition: "1s",
        }}>
            {percent}%
        </div>
    )

}

export default QuestionPercent