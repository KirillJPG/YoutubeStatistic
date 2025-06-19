import { SetVideoForm } from "@features/set-video-form"
import { BaseVideoInfo } from "@widgets/BaseVideoInfo"
import { CommentsList } from "@widgets/CommentsList"
import { StatisticsVideo } from "@widgets/StatisticsVideo"
import styles from "./statistic.module.scss"
function Statistic(){
    
    return (
        <div className={styles.body}>
                <SetVideoForm/>
                <BaseVideoInfo/>
                <StatisticsVideo/>
                <CommentsList/>
        </div>
    )
}
export default Statistic