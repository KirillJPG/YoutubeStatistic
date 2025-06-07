import axios from "axios";

export const apiInstanse = axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    withCredentials:true,
})