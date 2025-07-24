import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/auth';

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return { token: response.data.token, user: response.data.user }; // Match authSlice expectation
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed'); // Improved error
  }
};

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return { token: response.data.token, user: response.data.user }; // Consistent structure
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Add token refresh functionality
const refreshToken = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/refresh-token`);
    return response.data.token;
  } catch (error) {
    throw new Error('Session expired. Please login again.');
  }
};

const authService = {
  register,
  login,
  refreshToken, // New method
};

export default authService;