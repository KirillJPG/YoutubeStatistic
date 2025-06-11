import { Input } from "@shared/ui/Input/ui/Input"
import styles from "./SetVideoForm.model.scss"
import {ReactComponent as URLIcon} from "../assets/url.svg"
export function SetVideoForm(){
    return (
        <div className="">
            <Input placeholder="URL" icon={<URLIcon width={24} height={24} />}/>
        </div>
    )
}