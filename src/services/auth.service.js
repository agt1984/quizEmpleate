import axios from "axios";

const API_URL =
  "https://empleatecontalentobackend-production.up.railway.app/api";

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log("Error en el registro:", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    console.log(response.status);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log("Error en el login:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    console.log(response.status);
    return response;
  } catch (error) {
    console.log("Error trayendo los usuarios:", error);
    throw error;
  }
};
