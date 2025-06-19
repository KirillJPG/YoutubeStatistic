import { useEffect, useRef, useState } from "react"
import { NewViews } from "../lib/NewViews"
import { VideoStatistic } from "../model/Statistic.interface"
import { useStore } from "../model/store"
import styles from "./NewViewsChart.module.scss"

export function NewViewsChart(){
    const canvas = useRef<HTMLCanvasElement>(null)
    const {selectVideo,statisticsVideos} = useStore()
    const data:VideoStatistic[] = [...statisticsVideos[selectVideo] ?? []]
    useEffect(()=>{
        if (canvas.current && data){
            const chart = new NewViews(canvas.current,data,0)
            chart.updateFrame()
        }        
    },[canvas.current,data.length])
    return (
        <div className={styles.bg}>
            <div className={styles.title}>Views Statistic</div>
            <canvas className={styles.chart} ref={canvas}>Aboba</canvas>
        </div>
    )
}