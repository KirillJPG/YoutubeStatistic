import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
type States = {
    selectPage:number
    pages:string[]
}
type Actions = {
    setPage:(page:number) =>void,
    setPages:(page:string[]) =>void,
    clearPages:()=>void,

}
type CommentStore = Actions & States
export const useStore = create<CommentStore>()(immer(persist(
    (set)=>({
        selectPage:0,
        pages:[""],
        setPage:(page)=>set((state)=>{
            state.selectPage = page
        }),
        setPages:(page)=>set((state)=>{
            state.pages = page
        }),
        clearPages:()=>set((state)=>{
            state.pages = [""]
        })
    }),
    {name:"comment"}
)))