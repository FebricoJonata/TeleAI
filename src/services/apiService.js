import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiUrl = process.env.BASE_URL;

const ApiService = {
  // GET request
  async get(endpoint, queryParam = {}) {
    console.log(queryParam);
    const response = await axios.get(`${apiUrl}/${endpoint}`, queryParam);
    return response.data;
  },

  // POST request
  async post(endpoint, data) {
    const response = await axios.post(`${apiUrl}/${endpoint}`, data);
    return response.data;
  },

  // PUT request
  async put(endpoint, data) {
    const response = await axios.put(`${apiUrl}/${endpoint}`, data);
    return response.data;
  },

  // DELETE request
  async delete(endpoint) {
    const response = await axios.delete(`${apiUrl}/${endpoint}`);
    return response.data;
  },
};

export default ApiService;
