import React, { useState } from 'react';
import './Login.css'

function Login() {
    const [count, setCount] = useState(0)

  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      
      console.log('Email:', email);
      console.log('Senha:', senha); 
    }  
  
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
}

export default Login;
