import style from './index.module.css';
import FilledButton from "../filledButtons";
import styles from "../inputField/index.modules.css";
const pageTemplate = ({image, headerName, underHeader, buttonText}) =>{
    return(
        <>
            <div className={style.container}>
                <img src={image} alt="image"/>
                <div className={style.signup}>
                    <h1>{headerName}</h1>
                    <p>{underHeader}</p>
                    <FilledButton text={buttonText}/>
                </div>

                <div>
                    <form className={styles.input}>
                        <input type="text" placeholder={"username"}/>
                        <input type="text" placeholder={"password"}/>
                    </form>
                </div>

            </div>
        </>
    )
}
export default pageTemplate;