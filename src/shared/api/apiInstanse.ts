import axios from "axios";

export const apiInstanse = axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
})
export const apiKeyParam = "?key="+process.env.REACT_APP_API_KEY