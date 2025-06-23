import { apiInstanse, apiKeyParam } from "@shared/api/apiInstanse"
import { AxiosResponse } from "axios"
import { useEffect } from "react"
import { useStore } from "../model/store"
import { Comment } from "./dto/Comment"

export function useGetPages(id:string,totalComments:number){
    const {setPages,clearPages} = useStore()
    const request = async()=>{
        clearPages() 
        await getAllPages(id,setPages,totalComments)
    }
    useEffect(()=>{
        request()
    },[id])
    return [request] 
}
async function getAllPages(id:string,setPage:(page:string)=>void,totalComments:number){
    let page:string | undefined = "" 
    const newPages:string[] = [""]
    for (let i =0; i<totalComments/100+1; i++){
        try{
            const request:AxiosResponse<Comment,any> = await apiInstanse.get<Comment>("/commentThreads"+apiKeyParam+"&maxResults=100&videoId="+id+(page ? "&pageToken="+page :"" ))
            if (request.data.nextPageToken){
                page =  extractPage(request.data.nextPageToken) 
                newPages.push(page)
                setPage(page)
            }else{
                page = undefined
            }
        } 
        catch(err){
        }
    }

}
function extractPage(token:string){
    return token.split("=")[0]
}