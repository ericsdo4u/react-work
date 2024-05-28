import styles from './index.modules.css'

const InputField = () => {
    return(
        <>
            <div>
                <form className={styles.input}>
                    <input type="text" placeholder={"username"}/>
                    <input type="text" placeholder={"password"}/>
                </form>
            </div>
        </>
    )
}
export default InputField