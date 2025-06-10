import { create } from "zustand";
import {immer} from "zustand/middleware/immer"

type States = {
    open:boolean
}
type Actions = {
    setOpen:(open:boolean) =>void
}
type Store = States & Actions

export const useStore = create<Store>()(immer((set)=>({
   open:false,
   setOpen:(open) =>set((state)=>setOpen(open,state)),
})))

function setOpen (open:boolean,state:Store){
    state.open = open
}