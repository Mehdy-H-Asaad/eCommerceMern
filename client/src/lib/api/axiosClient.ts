import axios from "axios";

export const publicAxios = axios.create({
	baseURL: "http://localhost:5000/api",
});

const axiosClient = axios.create({
	baseURL: "http://localhost:5000/api",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

axiosClient.interceptors.request.use(
	config => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	error => Promise.reject(error)
);

axiosClient.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;

		// If the error status is 401 and there is no originalRequest._retry flag,
		// it means the token has expired and we need to refresh it
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const response = await publicAxios.get("/auth/refresh", {
					withCredentials: true,
				});
				const { accessToken } = response.data;

				localStorage.setItem("accessToken", accessToken);

				// Retry the original request with the new token
				originalRequest.headers.Authorization = `Bearer ${accessToken}`;

				return axios(originalRequest);
			} catch (error) {
				console.log(error);

				// Handle refresh token error or redirect to login
			}
		}

		return Promise.reject(error);
	}
);

export default axiosClient;
