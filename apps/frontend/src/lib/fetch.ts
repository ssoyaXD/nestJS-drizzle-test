import axios from 'axios';

const base = process.env.NEXT_PUBLIC_API_URL;

console.log(`${base}/users`);
axios.get(`${base}/users`).then(res => res.data).catch(err => console.error(err));

export const fetchUsers = () => axios.get(`${base}/users`).then(res => res.data);
export const createUser = (data: any) => axios.post(`${base}/users`, data).then(res => res.data);
export const updateUser = (id: number, data: any) =>
  axios.put(`${base}/users/${id}`, data).then(res => res.data);
export const deleteUser = (id: number) => axios.delete(`${base}/users/${id}`).then(res => res.data);
