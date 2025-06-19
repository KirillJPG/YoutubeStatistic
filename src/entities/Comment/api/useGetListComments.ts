import { apiInstanse, apiKeyParam } from "@shared/api/apiInstanse"
import { ErrorResponse } from "@shared/types/ErrorResponse.i"
import { useQuery } from "@tanstack/react-query"
import { CommentQueries } from "./comment.query"
import { Comment } from "./dto/Comment"

export function useGetListComments(id:string){
    const request = async () =>{
        if (!id) return null
        try{
            const {data} = await apiInstanse.get<Comment>("/commentThreads"+apiKeyParam+"&part=snippet&videoId="+id) 
            return data
        }catch(err:any){
            console.log(err.response.data.error.message)
        }
        
    }
    return useQuery({
        queryKey:CommentQueries.getByVideoId(id),
        queryFn:request,
        refetchInterval:10000
    })
}