import { apiInstanse, apiKeyParam } from "@shared/api/apiInstanse"
import { ErrorResponse } from "@shared/types/ErrorResponse.i"
import { useQuery } from "@tanstack/react-query"
import { useStore } from "../model/store"
import { CommentQueries } from "./comment.query"
import { Comment } from "./dto/Comment"

export function useGetListComments(id:string,part:string = "snippet"){
    const {selectPage,pages} = useStore()
    const page =  pages[selectPage]
    const request = async () =>{
        if (!id) return null
        try{
            const {data} = await apiInstanse.get<Comment>("/commentThreads"+apiKeyParam+"&part="+part+"&maxResults=100&videoId="+id+(page ? "&pageToken="+page :"" )) 
            return data
        }catch(err:any){
            console.log(err.response.data.error.message)
        }
        
    }
    return useQuery({
        queryKey:CommentQueries.getByPage(id,selectPage),
        queryFn:request,
    })
}