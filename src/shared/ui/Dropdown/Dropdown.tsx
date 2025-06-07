import { styleUi } from "@shared/types/UiStyle"
import { ReactNode, useState } from "react"
import { Button } from "../Button/Button"
import styles from "./Dropdown.module.scss"

interface DropdownMenu{
    list:any[]
    variant:styleUi,
    select:any
}

export function Dropdown({list,variant,select}:DropdownMenu){
    const [open,setOpen] = useState(false)
    return (
        <div className="">
            <Button variant={variant} onClick={()=>setOpen(e=>!e)}>{select}</Button>
            {open && <DroppedMenu select={select} list={list} variant={variant} />}
        </div>
    )
}
function DroppedMenu({list,variant}:DropdownMenu){
    console.log(list)
    return (
        <div className="">
            {list.map(e=>(
                <p key={e}>{e}</p>
            ))}
        </div>
    )
}