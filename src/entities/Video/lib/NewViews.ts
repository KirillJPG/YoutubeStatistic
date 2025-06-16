import { Statistics } from "../api/dto/Video.interface"
import { VideoStatistic } from "../model/Statistic.interface"

type TimeSlice = "hour" | "day" | "mounth"

export class NewViews{
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D
    category:TimeSlice = "hour"
    data:VideoStatistic[]
    gap = 20
    root = window.getComputedStyle(document.body)
    constructor(canvas:HTMLCanvasElement,data:VideoStatistic[] ,category?:TimeSlice){
        this.canvas = canvas
        this.data = data
        this.ctx = canvas.getContext("2d")!
        this.resize()
        this.category = category ?? "hour"
    }
    resize(){
        const width = this.canvas.width
        const height = this.canvas.height
        this.ctx.canvas.width =width
        this.ctx.canvas.height = height
    }
    fillBg(){
        this.ctx.fillStyle = this.root.getPropertyValue("--neutral400")
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
    }
    updateFrame(){
        this.fillBg()
    }
}