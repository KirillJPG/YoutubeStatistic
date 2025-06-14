import { useGetVideo, useVideoStore } from "..";

export function useGetSelectVideo(){
    const {selectVideo} = useVideoStore()
    return useGetVideo(selectVideo)
}