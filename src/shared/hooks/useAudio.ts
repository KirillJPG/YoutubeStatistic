export function useAudio(src:string,volume:number = 1){
    const audio = new Audio(src)
    audio.volume = volume
    const play = () =>{
        audio.play().catch((e)=>console.log("error loading",e))
        audio.remove()
    } 
    return play
}