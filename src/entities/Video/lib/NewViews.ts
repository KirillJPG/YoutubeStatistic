export class NewViews{
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D
    constructor(canvas:HTMLCanvasElement){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")!
    }
    
}