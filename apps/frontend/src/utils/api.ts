// src/utils/api.ts
import axios from 'axios';

// 백엔드 서버 주소
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

// 사용자 추가
export const createUser = async (username: string, email: string) => {
    try {
        const response = await axios.post(API_URL, { username, email });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// 사용자 목록 조회
export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// 사용자 수정
export const updateUser = async (id: number, username: string, email: string) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { username, email });
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// 사용자 삭제
export const deleteUser = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
