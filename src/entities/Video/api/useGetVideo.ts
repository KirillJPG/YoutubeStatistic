import { apiInstanse, apiKeyParam } from "@shared/api/apiInstanse";
import { useQuery } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";
import { Video } from "./dto/Video.interface";
import { videoQueries } from "./video.query";
import { PartType } from "./videoPart";

export function useGetVideo(id:string){
    const get_request = async () =>{
        if (!id) return null
        try{
            const request = await apiInstanse.get<Video>("/videos"+apiKeyParam+"&part=snippet,statistics,contentDetails&id="+id) 
            return request.data
        } catch(error) {
            console.log(error)
            if (error as ErrorResponse){
                console.log(error)
            } 
        }
    }
    return useQuery({
        queryKey:videoQueries.getVideo(id),
        refetchInterval:2000,
        queryFn:get_request,
    })
}