import { SetVideoForm } from "@features/set-video-form"
import { BaseVideoInfo } from "@widgets/BaseVideoInfo"
import styles from "./statistic.module.scss"
function Statistic(){
    
    return (
        <div className={styles.body}>
                <SetVideoForm/>
                <BaseVideoInfo/>
        </div>
    )
}
export default Statistic