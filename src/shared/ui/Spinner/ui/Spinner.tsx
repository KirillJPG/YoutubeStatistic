import styles from "./Spinner.module.scss"

export function Spinner(){
    const dashArray = Math.PI*2*25 // PI*2*RADIUS
    return (
        <svg viewBox="0 0 100 100" className={styles.spinner}>
            <circle r={25} cx="50" cy="50" fill="transparent"  stroke-linecap="round" stroke-width="10px" stroke-dasharray={dashArray} stroke-dashoffset={"var(--progress)"}></circle>
        </svg> 
    )
}