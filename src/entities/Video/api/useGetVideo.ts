import { apiInstanse, apiKeyParam } from "@shared/api/apiInstanse";
import { useQuery } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";
import { videoQueries } from "./video.query";
import { IVideo } from "./dto/Video.interface";

export function useGetVideo(id:string){
    
    const get_request = async () =>{
        try{
            const request = await apiInstanse.get<IVideo>("/videos"+apiKeyParam+"&part=snippet&id="+id) 
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
        queryFn:get_request,
    })
}