import { CommentData, useGetListComments } from "@entities/Comment"
import { useVideoStore } from "@entities/Video"
import styles from "./CommentsList.module.scss"

export function CommentsList(){
    const {selectVideo} = useVideoStore()
    const {data} = useGetListComments(selectVideo)
    if (data?.items.length == 0 || !data?.items ){
        return <div className="">Dont comments</div>
    }
    return (
        <div className="">
            {data.items.map(e=>(
                <Comment comment={e.snippet.topLevelComment.snippet}/>
            ))}
        </div>
    )
}

export function Comment({comment}:{comment:CommentData}){
    console.log(comment)
    return (
        <div className=""></div>
    )
}