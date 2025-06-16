import { useEffect, useRef } from "react"
import { NewViews } from "../lib/NewViews"
import { VideoStatistic } from "../model/Statistic.interface"
import { useStore } from "../model/store"
import styles from "./NewViewsChart.module.scss"

export function NewViewsChart(){
    const canvas = useRef<HTMLCanvasElement>(null)
    const {selectVideo,statisticsVideos} = useStore()
    const data:VideoStatistic[] = [...statisticsVideos[selectVideo] ?? []]
    useEffect(()=>{
        console.log(data)
        if (canvas.current && data){
            const chart = new NewViews(canvas.current,data)
            chart.updateFrame()
        }        
    },[canvas.current,data.length])
    return (
        <canvas className={styles.chart} ref={canvas}>Aboba</canvas>
    )
}