import { Input } from "@shared/ui/Input/ui/Input"
import styles from "./SetVideoForm.module.scss"
import {ReactComponent as URLIcon} from "../assets/url.svg"
import { Button } from "@shared/ui/Button/ui/Button"
import { useVideoStore } from "@entities/Video"
import { ChangeEvent, InputHTMLAttributes, useState } from "react"
import { ExtractId } from "../tools/Extract_id"
export function SetVideoForm(){
    const {setVideo} = useVideoStore()
    const [id,setId] = useState("")

    const changeURL = (e:ChangeEvent<HTMLInputElement>) => {
        const extratedId =ExtractId(e.target.value.toString()) 
        setId(extratedId)
    }
    return (
        <div className={styles.form}>
            <Input onChange={changeURL} placeholder="URL" icon={<URLIcon width={24} height={24} />}/>
            <Button variant="outline" onClick={()=>setVideo(id)}>Search</Button>
        </div>
    )
}