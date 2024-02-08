import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api-survey-2.fewnu.app/api/",
    

    withCredentials:true,
})