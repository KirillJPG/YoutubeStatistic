import { Dropdown } from "@shared/ui/Dropdown/Dropdown"
import stlyes from "./statistic.module.scss"
function Statistic(){
    const list = Array(10).fill(1).map((e,id)=>id)
    return (
        <div className={stlyes.text}>
            <Dropdown variant="outline" select={2022} list={list}/>
        </div>
    )
}
export default Statistic