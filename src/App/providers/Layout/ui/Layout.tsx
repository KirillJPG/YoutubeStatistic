import { SideBar } from "@widgets/SideBar";
import { ReactNode } from "react";
import styles from "./Layout.module.scss"

export function Layout({children}:{children:ReactNode}){
    return (
        <div className={styles.layout}>
            <SideBar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}