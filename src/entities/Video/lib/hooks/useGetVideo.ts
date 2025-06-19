import { useVideoStore } from "@entities/Video";
import { apiInstanse, apiKeyParam } from "@shared/api/apiInstanse";
import { useQuery } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";
import { Video } from "../../api/dto/Video.interface";
import { videoQueries } from "../../api/video.query";
import { PartType } from "../../api/videoPart";

export function useGetVideo(id:string){
    const {selectVideo,addStatistics} = useVideoStore()
    const get_request = async () =>{
        if (!id) return null
        try{
            const response = await apiInstanse.get<Video>("/videos"+apiKeyParam+"&part=snippet,statistics,contentDetails&id="+id) 
            const {data} = response
            console.log("update")
            if (data && data.items){
                const videoStat = data.items[0].statistics
                addStatistics({date:new Date(),...videoStat},selectVideo)
            }
            return response.data
        } catch(error:any) {
            console.log(error.response.data.error.message)
        }
    }
    return useQuery({
        queryKey:videoQueries.getVideo(id),
        refetchInterval:10000,
        queryFn:get_request,
    })
}