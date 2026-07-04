import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: "https://dentai-api-0oyn.onrender.com/api/v1",
    timeout: 30000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {

        if (!error.response) {
            toast.error(
                "Unable to connect to the DentAI server."
            );
        }

        return Promise.reject(error);
    }
);

export default api;