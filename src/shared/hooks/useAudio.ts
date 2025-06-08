import { useEffect, useState } from "react";
export function useAudio(src:string,volume:number = 1){
    const play = () =>{
        const audio = new Audio(src)
        audio.volume = volume
        audio.play().catch((e)=>console.log("error loading",e))
        audio.remove()
    } 
    return play
}