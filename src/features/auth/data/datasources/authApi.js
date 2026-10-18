// authApi.js
import { apiClient } from '../../../../core/api/client';

export const authApi = {
    async login({ code, password }) {
        // دي بترجع البيانات الخام من السيرفر
        return apiClient('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ code, password }),
        });
    },
};