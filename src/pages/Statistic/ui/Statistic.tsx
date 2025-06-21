import { SetVideoForm } from "@features/set-video-form"
import { BaseVideoInfo } from "@widgets/BaseVideoInfo"
import { CommentsStatistic } from "@widgets/CommentsList"
import { StatisticsVideo } from "@widgets/StatisticsVideo"
import styles from "./statistic.module.scss"
function Statistic(){
    
    return (
        <div className={styles.body}>
                <SetVideoForm/>
                <BaseVideoInfo/>
                <StatisticsVideo/>
                <CommentsStatistic/>
        </div>
    )
}
export default Statistic