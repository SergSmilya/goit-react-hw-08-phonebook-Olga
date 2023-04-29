import axios from 'axios';

axios.defaults.baseURL = 'https://6438fee64660f26eb1a7e5cd.mockapi.io/api';

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
