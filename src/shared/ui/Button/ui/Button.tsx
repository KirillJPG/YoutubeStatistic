import { useAudio } from "@shared/hooks/useAudio"
import { styleUi } from "@shared/types/UiStyle"
import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.scss"
import audio from "../assets/click.mp3"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: styleUi,
}
export function Button({ variant,...props}: ButtonProps) {
    const play = useAudio(audio,0.5)
    return (
        <button {...props} onMouseDown={()=>play()} className={clsx(styles.button,styles[variant],props.className)}/>
    )
}