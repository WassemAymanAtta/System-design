// LoginForm.jsx
import { useState } from 'react';

export function LoginForm({ onSubmit, loading, error }) {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ code, password, rememberMe });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> Login </h2>

      <div>
        <label>Passcode</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={loading}
          required
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            disabled={loading}
          />
          Remember me
        </label>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? 'جاري الدخول...' : 'دخول'}
      </button>
    </form>
  );
}