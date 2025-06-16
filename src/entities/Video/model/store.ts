import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { Statistics } from "../api/dto/Video.interface";
import { VideoStatistic } from "./Statistic.interface";
type States = {
    selectVideo:string
    statisticsVideos:Record<string,VideoStatistic[]>
}
type Actions = {
    setVideo:(id:string)=>void
    addStatistics:(statistics:VideoStatistic,id:string)=>void
}
type VideoStore = Actions & States
export const useStore = create<VideoStore>()(immer(persist(
    (set)=>({
        selectVideo:"",
        setVideo:(id)=>set((state)=>{
            state.selectVideo = id
        }),
        statisticsVideos:{
        },
        addStatistics:(statistics,id)=>set((state)=>{
            const videoStatistic = state.statisticsVideos[id]
            if (!videoStatistic || videoStatistic.length === 0) {
                state.statisticsVideos[id] = []
                state.statisticsVideos[id].push(statistics)
                return;
            }
            const lastStatistic = videoStatistic.slice(-1)[0]
            const pastTime =new Date(statistics.date).getTime() - new Date(lastStatistic.date).getTime() 
            if (new Date(pastTime).getSeconds() < 2) return;
            videoStatistic.push(statistics)
        }),
    }),
    {name:"video"}
)))