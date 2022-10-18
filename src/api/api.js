import axios from "axios";
let Api = axios.create({
    baseURL: "http://127.0.0.1:8001/" // server api's URL
});
Api.defaults.withCredentials = true;
export default Api;