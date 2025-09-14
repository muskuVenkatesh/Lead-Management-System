import axios from "axios";

const API_URL = "http://localhost:6006/api";

export const createLead = async (leadData) => {
  return await axios.post(`${API_URL}/leads`, leadData);
};

export const getLeads = async () => {
  return await axios.get(`${API_URL}/getleads`);
};
