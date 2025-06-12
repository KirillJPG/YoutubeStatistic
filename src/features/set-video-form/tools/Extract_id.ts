export function ExtractId(url:string):string{
   try{
      const id = url.split("/watch?v=")[1].split("&")[0]
      console.log(id)
      return id 
   }catch(err){}
   return ""
}