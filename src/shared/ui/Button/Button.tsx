import { styleUi } from "@shared/types/UiStyle"
import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: styleUi,
}
export function Button({ variant,...props}: ButtonProps) {
    return (
        <button {...props} className={clsx(styles.button,styles[variant])}/>
        
    )
}