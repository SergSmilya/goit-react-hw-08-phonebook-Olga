import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export function unSetToken() {
  axios.defaults.headers.common.Authorization = '';
}

export async function signupUsers(userObj) {
  const response = await axios.post('/users/signup', userObj);
  return response;
}

export async function logInUsers(userObj) {
  const response = await axios.post('/users/login', userObj);
  return response;
}

export async function logOutUsers() {
  const response = await axios.post('/users/logout');
  return response;
}

export async function refreshUsers() {
  const response = await axios('/users/current');
  return response;
}
export async function fetchContacts() {
  const response = await axios('/contacts');
  return response;
}

export async function addContact(data) {
  const response = await axios.post('/contacts', data);
  return response;
}

export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response;
}
