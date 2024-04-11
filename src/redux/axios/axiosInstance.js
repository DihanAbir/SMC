import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(async function (config) {
  // const user = getLocalStorage("unizz-token");
  // const accessToken = user?.access_token;
  // if (accessToken) config.headers.Authorization = accessToken;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => ({ data: response.data }),
  (error) => ({ data: error.response.data })
);

export default axiosInstance;
