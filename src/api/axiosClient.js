import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/workhub/api/v1', // URL cơ sở
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data, // Trả về dữ liệu từ response
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;