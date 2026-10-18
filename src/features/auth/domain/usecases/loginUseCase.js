// loginUseCase.js
import { authRepository } from '../../data/repositories/authRepository';

export async function loginUseCase({ code, password, rememberMe }) {
    // 1. تحقق من المدخلات (validation)
    if (!code || !password) {
        throw new Error('الكود والباسورد مطلوبين');
    }

    // 2. نكلم الـ Repository
    const user = await authRepository.login({ code, password });

    // 3. منطق إضافي: لو rememberMe، نخزن الـ token
    if (rememberMe) {
        localStorage.setItem('auth_token', user.token);
    }

    return user;
}