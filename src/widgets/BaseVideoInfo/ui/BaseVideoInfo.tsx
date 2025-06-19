import { useGetVideo, useVideoStore } from "@entities/Video"
import styles from "./BaseVideoInfo.module.scss"
import {ReactComponent as Like} from "../assets/like.svg"
import {ReactComponent as CommentsIcon} from "../assets/comments.svg"
import {ReactComponent as People} from "../assets/people.svg"
import clsx from "clsx"
import {ReactComponent as NoImage} from "../assets/no-image.svg"
import { Button } from "@shared/ui/Button/ui/Button"
import { LineLoading } from "@shared/ui/LineLoading/ui/LineLoading"

type variant = "red" | "green" | "primary"

export function BaseVideoInfo(){
    const {selectVideo} = useVideoStore()
    const {data,isLoading} = useGetVideo(selectVideo  )
    if (!selectVideo){
        return <div className="">Not Select</div>
    }
    if (isLoading ){
        return (
            <LineLoading/>
        )
    }
    if (data == undefined || data.items?.length == 0 || data.items == undefined) {
        return (
            <div className={styles.notfound}>
                Not Found
            </div>
        )
    }
    const video = data.items[0]
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.video_title}>{video.snippet.title}</div>
                <Button variant="solid_light"></Button>
            </div>
            <div className={styles.allInfo}>
                <LikeInfo data={video.statistics.likeCount ?? "?"}/>
                <CommentInfo data={video.statistics.commentCount ?? "?" }/>
                <ViewsInfo data={video.statistics.viewCount ?? "?"}/>
                <Preview src={video.snippet.thumbnails.high.url}/>
            </div>
        </div>
    )
}

const Preview = ({src}:{src?:string}) => {
    return (
       <>
        {src != undefined? 
            <img className={styles.preview} src={src} /> 
                :
            <div className={styles.preview}>
                <NoImage width={100} height={100} />
            </div>
        }
       </> 
    )
}
const LikeInfo = ({data}:{data:any}) => <BaseInfoContainer  data={data} Icon={Like}  style="red" title="Likes"/>
const CommentInfo = ({data}:{data:any}) => <BaseInfoContainer  data={data} Icon={CommentsIcon}  style="primary" title="Comments"/>
const ViewsInfo = ({data}:{data:any}) => <BaseInfoContainer  data={data} Icon={People}  style="green" title="Views"/>

interface IBaseInfoContainer{
    title:string,
    data:any,
    style:variant,
    Icon:React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
function BaseInfoContainer({data,style,title,Icon}:IBaseInfoContainer){
    return(
        <div className={clsx(styles.info,styles[style])}>
            <Icon width={50} height={50} className={styles.svg}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.data}>{data}</div>
        </div>
    )
}