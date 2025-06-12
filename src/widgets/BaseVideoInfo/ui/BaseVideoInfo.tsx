import { useGetVideo, useVideoStore } from "@entities/Video"
import styles from "./BaseVideoInfo.module.scss"
import {ReactComponent as Like} from "../assets/like.svg"
import {ReactComponent as CommentsIcon} from "../assets/comments.svg"
import {ReactComponent as People} from "../assets/people.svg"
import clsx from "clsx"


type variant = "red" | "green" | "primary"

export function BaseVideoInfo(){
    const {selectVideo} = useVideoStore()
    const {data} = useGetVideo(selectVideo  )
    console.log(data)
    if (data == undefined || data.items?.length == 0 || data.items == undefined) return <>not found</>
    return (
        <div>
            <div className="">

            </div>
            <div className={styles.allInfo}>
                <LikeInfo data={data.items[0].statistics.likeCount}/>
                <CommentInfo data={data.items[0].statistics.commentCount}/>
                <ViewsInfo data={data.items[0].statistics.viewCount}/>
                <img className={styles.preview} src={data.items[0].snippet.thumbnails.high.url} />
            </div>
        </div>
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