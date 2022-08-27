import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://letus-blogg.herokuapp.com/api/",
});