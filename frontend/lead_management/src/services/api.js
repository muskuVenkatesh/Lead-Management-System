import axios from "axios";

const API_URL = "http://localhost:5000/api/leads";

export const createLead = async (leadData) => {
  return await axios.post(API_URL, leadData);
};

export const getLeads = async () => {
  return await axios.get(API_URL);
};
