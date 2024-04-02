import styles from "./Input.module.css"
import {FC, InputHTMLAttributes} from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {}

const Input:FC<Input> = ({...rest}) => {
    return (
       <input className={styles.input} {...rest}/>
    );
};

export default Input;