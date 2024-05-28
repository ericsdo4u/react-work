import style from './index.module.css';

const FilledButton = ({text}) => {
    return(
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}

export default FilledButton;