import { ConvertNumber } from "@shared/lib/ConvertNumber"
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
        const bound = this.canvas.getBoundingClientRect()
        const width = bound.width
        const height = bound.height 
        this.canvas.width = +width
        this.canvas.height = +height
    }
    fillBg(){
        this.ctx.fillStyle = this.root.getPropertyValue("--color3_100")
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
    }
    updateFrame(){
        this.fillBg()
        this.drawText()
        this.drawChart()
    }
    getGrowth(){
        const views = this.data.map(e=>e.viewCount)
        let listGrowth:number[] = []  
        views.reduce((pv,v)=>{
            listGrowth.push(+v-+pv)
            return v
        })
        const maxGrowth = listGrowth.reduce((pv,v)=>pv>v ? pv : v)
        return {maxGrowth,listGrowth}
    }
    drawText(){
        this.ctx.fillStyle = this.root.getPropertyValue("--neutral900") 
        this.ctx.font = "bold 15px Inter"

        const {maxGrowth:growth,listGrowth} = this.getGrowth()
        for(let i = 0; i<=5; i++){
            const text = growth * ( 1 - (i*0.2))
            this.ctx.fillText(ConvertNumber(text),this.gap,(this.gap*1.5)+ this.canvas.height*((i*0.2)))
        }
    }
    drawChart(){
        const width = 10
        const {maxGrowth,listGrowth} = this.getGrowth()
        this.ctx.fillStyle = this.root.getPropertyValue("--color3")
        let x = 0
        this.data.forEach((v,id)=>{
            if (id === 0 ) return;
            const growth = listGrowth[id-1]
            if (growth === 0 ) return
            const height =(this.canvas.height-this.gap*2) * (growth/maxGrowth) 
            console.log(height)
            this.ctx.roundRect(x*+(this.gap+width)+(this.gap*3),this.canvas.height-this.gap,width,-1*height,10)
            this.ctx.fill()
            x++
        })
    }
}