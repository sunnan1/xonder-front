import axios from "axios";
let Api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL // server api's URL
});
Api.defaults.withCredentials = true;
export default Api;