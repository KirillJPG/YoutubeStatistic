import { useGetVideo } from "@entities/Video"
import stlyes from "./statistic.module.scss"
function Statistic(){

    const {data} = useGetVideo("jNQXAC9IVRw")
    console.log(data)
    return (
        <div className={stlyes.text}>
        </div>
    )
}
export default Statistic