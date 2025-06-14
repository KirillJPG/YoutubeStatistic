import styles from "./RateVideo.module.scss"
import {ReactComponent as LikeIcon} from "../assets/like.svg"
interface Rate{
    views:number,
    likes:number
}
export function RateVideo({views,likes}:Rate){
    const rate = ((likes / views) * 100).toFixed(2)
    return(
        <div className={styles.body}>
            <div className={styles.title}>Like Statistic</div>
            <div className={styles.icon}>
                <LikeIcon className={styles.like}/>
            </div>
            <div className={styles.info}>
                <ProgressBar views={views} likes={likes} />
                <div className={styles.points}>
                    <div className={styles.point}>0%</div>
                    <div className={styles.rate}>
                        {rate}%
                    </div>
                    <div className={styles.point}>100%</div>
                </div>
            </div>
        </div>
    )
}
function ProgressBar({views,likes}:Rate){
    const rate = +((likes/views)*100).toFixed(2)
    const dasharray = Math.PI*2*70
    const halfProgress = dasharray * ((100-50)/100)
    const progress = dasharray * 0.5 * ((100-rate)/100) + halfProgress
    return (
        <>
        <svg viewBox="0 0 160 160" className={styles.progress_bar}>
            <circle  r="70" cx="80" cy="80" fill="transparent" stroke="var(--primary100)" stroke-width="12px"></circle>
            <circle r="70" cx="80" cy="80" fill="transparent" stroke="var(--primary)" stroke-linecap="round" stroke-width="15px" stroke-dasharray={dasharray} stroke-dashoffset={progress}></circle>
        </svg> 
        </> 
    )
}