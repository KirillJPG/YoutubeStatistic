import styles from "./LineLoading.module.scss"

export function LineLoading(){
    return (
        <div className={styles.loading}>
            <div className={styles.line}></div>
        </div>
    )
}