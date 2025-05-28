import axiosClient from './axiosClient';

// API đăng nhập
export const login = async (email, password) => {
  try {
    const response = await axiosClient.post('/login', null, {
      params: { email, password }, // Gửi email và password qua query params
    });
    return response; // Trả về thông tin người dùng
  } catch (error) {
    throw new Error(error.response?.data || 'Đăng nhập thất bại');
  }
};

// API lấy thông tin người dùng hiện tại
export const getProfile = async () => {
  try {
    const response = await axiosClient.get('/me');
    return response; // Trả về thông tin người dùng
  } catch (error) {
    throw new Error(error.response?.data || 'Không thể lấy thông tin người dùng');
  }
};

// API đăng xuất
export const logout = async () => {
  try {
    const response = await axiosClient.post('/logout');
    return response; // Trả về thông báo đăng xuất
  } catch (error) {
    throw new Error(error.response?.data || 'Đăng xuất thất bại');
  }
};