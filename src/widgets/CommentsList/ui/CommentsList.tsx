import { CommentData, useCommentStore, useGetListComments, useGetPages} from "@entities/Comment"
import { useGetSelectVideo, useVideoStore } from "@entities/Video"
import { Button } from "@shared/ui/Button/ui/Button"
import { Spinner } from "@shared/ui/Spinner/ui/Spinner"
import { useEffect } from "react"
import styles from "./CommentsList.module.scss"


export function CommentsStatistic(){
    const {data:videoData} = useGetSelectVideo()
    if (!videoData?.items) return <></>
    const totalComments = +videoData!.items![0].statistics.commentCount
    return (
        <div>
            <Pagination totalComments={totalComments}/>
            <CommentsList/>
        </div>
    )
}
function CommentsList(){
    const {selectVideo} = useVideoStore()
    const {data,isLoading} = useGetListComments(selectVideo,"snippet")
    
    if (isLoading) return (
       <div className={styles.loading}>
            <Spinner />
       </div> 
    )
    if (data?.items.length == 0 || !data?.items){
        return <div className="">
            Dont comments
         </div>
    }
    
    return (
        <div className={styles.list}>
            {data.items.map(e=>(
                <Comment comment={e.snippet.topLevelComment.snippet} key={e.snippet.topLevelComment.id}/>
            ))}
        </div>
    )
}

function Comment({comment}:{comment:CommentData}){
    const date = new Date(comment.publishedAt)
    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                <img className={styles.img}/> 
                <div className={styles.name}>{comment.authorDisplayName}</div>
                <div className={styles.date}>{date.getUTCMinutes()}:{date.getUTCHours()} {date.getDay()}.{date.getMonth()}.{date.getFullYear()}</div>
            </div>
            <div className={styles.text}>{comment.textOriginal}</div>
            <div className={styles.likeCount}>{comment.likeCount} Likes</div>
        </div>
    )
}

function Pagination({totalComments}:{totalComments:number}){
    const {selectVideo} = useVideoStore()
    const {setPage,selectPage,pages} = useCommentStore()
    useGetPages(selectVideo,totalComments)
    const viewPages = pages.filter((e,id)=>(id>selectPage-3 && id< selectPage+3)  || id ==0 || id==pages.length-1 ).slice(0,9)
    return (

        <div className={styles.pagination}>
           {viewPages.map((v,id)=>(
               <Button variant={selectPage==pages.indexOf(v) ? "solid" : "outline"} onClick={()=>setPage(pages.indexOf(v))} key={v}>{pages.indexOf(v)+1}</Button>
            ))} 
        </div>
    )
}
