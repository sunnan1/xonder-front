import axios from "axios";

let Api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL // server api's URL
});
Api.defaults.withCredentials = true;
Api.defaults.headers.common['Accept'] = "application/json";
Api.defaults.headers.common['Content-Type'] = "application/json";

// interceptors
Api.interceptors.request.use(
    function(config) {
        document.getElementsByClassName("loader")[0].style.display = 'block';
        config.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token');
        return config;
    },
    function(error) {
        document.getElementsByClassName("loader")[0].style.display = 'none';
        return Promise.reject(error);
    }
);
  Api.interceptors.response.use(
    function(response) {
        document.getElementsByClassName("loader")[0].style.display = 'none';
        return Promise.resolve(response);
    },
    function(error) {
        document.getElementsByClassName("loader")[0].style.display = 'none';
        if (error.response.status == 401) {
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("token");
            window.location = '/login'
        }
        return Promise.reject(error);
    }
);

export default Api;
