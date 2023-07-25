import styles from './CustomButton.module.css'

const CustomButton = ({ onClick, text, className, isResultShown, style }) => {

    return (
        <button 
        style = {style}
        onClick={onClick} 
        className={[styles.button, className].join(' ')}
        >

            <p className={styles.text}>{text}</p>

        </button>
    )

}

export default CustomButton