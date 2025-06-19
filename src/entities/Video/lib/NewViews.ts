import { ConvertNumber } from "@shared/lib/ConvertNumber"
import { Statistics } from "../api/dto/Video.interface"
import { VideoStatistic } from "../model/Statistic.interface"

type TimeSlice = "hour" | "day" | "mounth"

export class NewViews{
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D
    category:TimeSlice = "hour"
    data:VideoStatistic[]
    height:number = 0
    width:number = 0
    scrollLeft:number = 0
    root = window.getComputedStyle(document.body)
    constructor(canvas:HTMLCanvasElement,data:VideoStatistic[] ,scrollLeft:number,category?:TimeSlice){
        this.canvas = canvas
        this.scrollLeft = scrollLeft
        this.data = data
        this.ctx = canvas.getContext("2d")!
        this.resize()
        this.width = canvas.width 
        this.height = canvas.height
        this.category = category ?? "hour"
    }
    resize(){
        const bound = this.canvas.getBoundingClientRect()
        const width = bound.width
        const height = bound.height 
        this.canvas.width = +width
        this.canvas.height = +height
    }
    updateFrame(){
        if (this.data.length <2)return;
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
        this.ctx.font = "bold 15px Inter,Arial"
        this.ctx.textAlign= "center"
        const {maxGrowth:growth} = this.getGrowth()
        this.ctx.fillStyle = this.root.getPropertyValue("--neutral900") 
        if (growth == 0 ) {
            this.ctx.fillText("Not growth",this.canvas.width/2,this.height/2)
            return;
        }
        this.ctx.textAlign= "start"
        for(let i = 0; i<5; i++){
            const text = (growth * (i/4)) 
            const y = this.height * (1-(i*0.2))
            this.ctx.fillText(ConvertNumber(text),5,y-5,40)
        }
    } 
    drawChart(){
        const width = 30
        const {maxGrowth,listGrowth} = this.getGrowth()
        this.ctx.font = "normal 12px Inter,Arial"
        this.ctx.textAlign="center"
        this.data.forEach((v,id)=>{
            const growth = Math.max(0,listGrowth[id-1]) 
            if (growth == undefined) return
            const left = (id-1-this.scrollLeft)*(20+width) + 40
            const heightRect = growth/maxGrowth * (this.height*0.8) 
            this.ctx.fillStyle = this.root.getPropertyValue("--primary100")
            this.ctx.roundRect(left,this.height,width,heightRect*-1-2,7)
            this.ctx.fillStyle = this.root.getPropertyValue("--primary")
            this.ctx.fillText(ConvertNumber(growth),left+(width/2),this.height-heightRect-5,width)
            this.ctx.fill()
        })
    }
}