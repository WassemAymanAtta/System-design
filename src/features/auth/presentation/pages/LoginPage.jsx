// LoginPage.jsx
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { LoginForm } from '../components/LoginForm';

export function LoginPage() {
  const { login, loading, error } = useLogin();
  const navigate = useNavigate();

  async function handleLogin({ code, password, rememberMe }) {
    const user = await login({ code, password, rememberMe });

    if (user) {
      // التوجيه حسب الدور
      if (user.isManager()) {
        navigate('/manager/dashboard');
      } else {
        navigate('/cashier/pos');
      }
    }
  }

  return (
    <LoginForm
      onSubmit={handleLogin}
      loading={loading}
      error={error}
    />
  );
}