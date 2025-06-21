export const CommentQueries = {
  comment:["comment"],
  getByVideoId:(id:string)=>[...CommentQueries.comment,"comment_video_id_"+id],
  getByPage:(id:string,page:number)=>[...CommentQueries.getByVideoId(id),"page_"+page]
}