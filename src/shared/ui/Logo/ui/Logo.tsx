import styles from "./Logo.module.scss"
import logo from "../assets/logo.png"
import clsx from "clsx"

export function Logo({short}:{short?:boolean}){
    return(
        <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles.img}/>
            <div className={clsx(styles.anim_text, short ? styles.noopen : styles.open)}>
                <div className={styles.text}>TubeStat</div>
            </div> 
        </div>
    )
}