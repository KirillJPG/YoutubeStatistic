import { styleUi } from "@shared/types/UiStyle"
import clsx from "clsx"
import { ReactNode, useState } from "react"
import { Button } from "../../Button/ui/Button"
import styles from "./Dropdown.module.scss"

interface DropdownMenu{
    list:any[]
    variant:styleUi,
    select:any
}

export function Dropdown({list,variant,select}:DropdownMenu){
    const [open,setOpen] = useState(false)
    return (
        <div className={styles.dropdown}>
            <Button variant={variant} onClick={()=>setOpen(e=>!e)}>{select}</Button>
            {open && <DroppedMenu select={select} list={list} variant={variant} />}
        </div>
    )
}
function DroppedMenu({list,variant}:DropdownMenu){
    return (
        <div className={clsx(styles.dropdown_menu,styles[variant])}>
            {list.map(e=>(
                <div className={styles.option} key={e}>
                    {e}
                </div>
            ))}
        </div>
    )
}