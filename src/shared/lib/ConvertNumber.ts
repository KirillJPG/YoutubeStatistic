export function ConvertNumber(num:number):string{
    if (num<1000) return num.toFixed(0)+""
    else if (num < 1000000) return (num/1000).toFixed(1)+"К"
    else{
        return (num/1000000).toFixed(1)+"М"
    }
}