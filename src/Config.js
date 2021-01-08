import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://beta.ashinyc.com/rest/lewisjewelers/V1/',
    headers: {
        Authorization: 'Bearer gifbwywtvyy4fybs31xgo8nzhrdovuob',
        Accept: "application/json"
    }
});