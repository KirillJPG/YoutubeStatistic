import { useGetVideo, useVideoStore } from "../..";

export function useGetSelectVideo(){
    const {selectVideo} = useVideoStore()
    const response = useGetVideo(selectVideo)
    return response
}