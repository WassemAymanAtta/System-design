// useLogin.js
import { useState } from 'react';
import { loginUseCase } from '../../domain/usecases/loginUseCase';

export function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function login({ code, password, rememberMe }) {
        setLoading(true);
        setError(null);

        try {
            const user = await loginUseCase({ code, password, rememberMe });
            return user;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return { login, loading, error };
}