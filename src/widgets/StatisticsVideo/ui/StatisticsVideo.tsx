import { NewViewsChart, RateVideo, useGetSelectVideo, useGetVideo } from "@entities/Video"
import styles from "./StatisticsVideo.module.scss"
export function StatisticsVideo(){
    const {data} = useGetSelectVideo()
    if (!data?.items) return <></>
    const video = data.items[0]
    return (
        <div className={styles.charts}>
            <RateVideo likes={+video.statistics.likeCount} views={+video.statistics.viewCount}/>
            <NewViewsChart />
        </div>
    )
}