import styles from './ProfileInput.module.css'

const ProfileInput = ({type, text, onChange, value}) =>{

    return(
        <div className={styles.InputCard}>

            <p className={styles.Text}>{text}</p>

            <input type = {type} className={styles.Input} value = {value} onChange={onChange}/>

        </div>
    )


}

export default ProfileInput