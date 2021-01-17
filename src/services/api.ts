import axios from "axios";

//BASE URL DA APLICACAO
const api = axios.create({
    baseURL: "http://200.98.204.176:8080",
});

export default api;