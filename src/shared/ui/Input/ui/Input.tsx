import clsx from "clsx"
import { InputHTMLAttributes, ReactNode } from "react"
import styles from "./Input.module.scss"

type variantInput = "filled" |"line" |"trans" |"line_trans" |"borderless" 

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    icon?:ReactNode
    variant?:variantInput,
}

export function Input({variant = "borderless",icon,...props}:IInput){
    return (
        <label className={clsx(styles.label,styles[variant])}>
            {icon}
            <input {...props} className={styles.input}/>
        </label>
    )
}