import { PartType } from "./videoPart";

export const videoQueries = {
    video:["video"],
    getVideo:(id:string)=>[...videoQueries.video,"video_"+id] 
}