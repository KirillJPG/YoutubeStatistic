import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type States = {
    selectVideo:string
}
type Actions = {
    setVideo:(id:string)=>void
}
type VideoStore = Actions & States
export const useStore = create<VideoStore>()(immer((set)=>({
    selectVideo:"",
    setVideo:(id)=>set((state)=>{
        state.selectVideo = id
    }),
})))