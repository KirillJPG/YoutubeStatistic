import { RoutePath } from "@shared/const/RoutePath"
import { Button } from "@shared/ui/Button/ui/Button"
import { Logo } from "@shared/ui/Logo/ui/Logo"
import clsx from "clsx"
import {ReactNode} from "react"
import {ReactComponent as Statistic} from "../assets/statistic.svg"
import { NavLink } from "react-router-dom"
import { useStore } from "../model/store"
import styles from "./SideBar.module.scss"

interface ILinkBar {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    text:string,
    href:string
}

export function SideBar(){
    const {open,setOpen} = useStore()
    return (
       <Bar/>  
    )
}
function Bar(){
    const {open} = useStore()
    return (
        <div className={clsx(open && styles.open, styles.background)}>
            <div className={clsx(styles.bar)}>
                {open && <Logo short={false}/>}
                {!open && <Logo short={true}/>}
                <LinkBar href={RoutePath.main} Icon={Statistic} text="Statistic"/>
                <ToggleBar/> 
            </div>
        </div>
    )
}



function ToggleBar(){
    const {open,setOpen} = useStore()
    return <Button onClick={()=>setOpen(!open)} variant={open ? "outline" : "solid" }>{open ? "close" : "open"}</Button>
}
function LinkBar({Icon,href,text}:ILinkBar){
    const {open} = useStore()
    return (
        <NavLink to={href} className={({isActive})=>clsx(styles.link,isActive && styles.active)}>
            <div className={styles.preview}>
                <Icon className={styles.img}/>
            </div>
            {open && <TextLink open={true} text={text}/> } 
            {!open && <TextLink open={false} text={text}/> } 
        </NavLink>
    )
}
function TextLink({text,open}:{text:string,open:boolean}){
    return (
        <div className={clsx(styles.container_text,open? styles.open : styles.noopen)}>
            <div className={styles.text}>
                {text}
            </div> 
        </div>
    )
}