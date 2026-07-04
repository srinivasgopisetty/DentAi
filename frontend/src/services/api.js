import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/api/v1",
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