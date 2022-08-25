import axios from "axios";

const API_URL = 'http://localhost:8000/employees';

export const saveEmployeeAPI = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (err) {
    console.log('Error while calling Save: ', err.message);
  }
}

export const listEmployeeAPI = async () => {
  try {
    return await axios.get(API_URL);
  } catch (err) {
    console.log('Error while calling Get: ', err.message);
  }
}

export const getEmployeeAPI = async (id) => {
  try {
    return await axios.get(`${API_URL}/${id}`);
  } catch (err) {
    console.log('Error while calling Get: ', err.message);
  }
}

export const updateEmployeeAPI = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (err) {
    console.log('Error while calling update data: ', err.message);
  }
}

export const deleteEmployeeAPI = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (err) {
    console.log('Error while calling delete data: ', err.message);
  }
}