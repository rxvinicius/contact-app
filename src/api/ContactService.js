import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080" });

export async function saveContact(contact) {
  return await api.post("contacts", contact);
}

export async function getContacts(page = 0, size = 10) {
  const url = `contacts?page=${page}&size=${size}`;
  return await api.get(url);
}

export async function getContactById(contactId) {
  return await api.get(`contacts/${contactId}`);
}

export async function updateContact(contact) {
  return await api.post("contacts", contact);
}

export async function updatePhoto(formData) {
  return await api.put(`contacts/photo`, formData);
}

export async function deleteContactById(contactId) {
  return await api.delete(`contacts/${contactId}`, contactId);
}
