import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://siyanet.pythonanywhere.com/api/', 
});
axiosInstance.interceptors.request.use(
    async (config) => {
      try {
        const token = localStorage.getItem('accessToken');
  
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error) => {

      return Promise.reject(error);
    }
  );

export default axiosInstance;
