// authRepository.js
import { authApi } from '../datasources/authApi';
import { User } from '../../domain/entities/User';

export const authRepository = {
    async login({ code, password }) {
        // 1. نكلم الـ API
        const rawData = await authApi.login({ code, password });

        // 2. نترجم البيانات الخام لـ Entity
        //    (افترض إن الـ API بيرجع { user_id, full_name, role, access_token })
        const user = new User({
            id: rawData.user_id,
            name: rawData.full_name,
            role: rawData.role,
            token: rawData.access_token,
        });

        return user;
    },
};