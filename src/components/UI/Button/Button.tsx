import React, {FC, ReactNode} from "react";
import styles from "./Button.module.css"

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode | string
}

const Button:FC<Button> = ({children, ...props}) => {
    return (
        <button className={styles.btn} {...props}>
            {children}
        </button>
    );
};

export default Button;