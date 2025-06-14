import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
type States = {
    selectVideo:string
}
type Actions = {
    setVideo:(id:string)=>void
}
type VideoStore = Actions & States
export const useStore = create<VideoStore>()(immer(persist(
    (set)=>({
        selectVideo:"",
        setVideo:(id)=>set((state)=>{
            state.selectVideo = id
        }),
    }),
    {name:"video"}
)))