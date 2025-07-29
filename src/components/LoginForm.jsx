import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await window.handleLogin(username, password);
      navigate("/research");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="content_frame mt-20">
      <form className="LogonForm p-5 text-left text-white" onSubmit={handleLogin}>
        {error && <span className="error-msg text-red-500">* Please try again.</span>}
        <h2 className="mt-2.5">Login</h2>
        <label className="font-bold" htmlFor="Username">Usuario</label><br />
        <input
          name="userName"
          id="Username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-[90%] h-5 mt-1 mb-2 p-3 text-base text-gray-700 border border-gray-300"
        /><br />
        <label className="font-bold" htmlFor="Password">Contraseña</label><br />
        <input
          name="password"
          type="password"
          autoComplete="off"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[90%] h-5 mt-1 mb-2 p-3 text-base text-gray-700 border border-gray-300"
        />
        <input
          type="submit"
          className="loginButton w-[40%] h-10 bg-[#4cB3c9] border-none cursor-pointer text-white hover:bg-[#C7D936] hover:text-[#1A2D3F] transition-all duration-500"
          value="Login"
        />
        <span>
          <a href="https://www.ucc.edu.co/servicios-digitales/Paginas/cambio-de-contrasena.aspx" className="text-white hover:text-[#B0E0E6] transition-all duration-500">
            ¿Olvidó su contraseña?
          </a>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;