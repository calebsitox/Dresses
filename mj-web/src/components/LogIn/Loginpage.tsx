// LoginPage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Loginpage.css';
import videoSource from '../../assets/video2.mp4';
import SocialLoginButtons from './SocialLoginButtons';

const LoginPage: React.FC = () => {
    // Estados locales para los campos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Función que simula el envío del formulario
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // Previene el comportamiento por defecto de recarga
        setError('');

        // 🚧 Lógica de Validación básica con Mock
        if (!email || !password) {
            setError('Por favor, rellena todos los campos.');
            return;
        }

        console.log(`Intentando iniciar sesión con: ${email}`);

        // 🚧 Aquí iría la llamada a tu API:
        // try {
        //     const response = await api.login(email, password);
        //     // Usarías un context global (AuthContext) para guardar el token
        //     // navigate('/'); // Redirigir a la página principal
        // } catch (err) {
        //     setError('Credenciales inválidas. Inténtalo de nuevo.');
        // }

        // Simulación de éxito tras 1 segundo
        setTimeout(() => {
             console.log("Inicio de sesión simulado exitoso.");
             // Aquí se llamaría a la función del AuthContext para guardar la sesión.
        }, 1000);
    };

    return (
        <main className="login-page-wrapper">
                        <video className="video-background" autoPlay loop muted>
                            <source src={videoSource} type="video/mp4" />
                            Tu navegador no soporta el tag de video.
                        </video>
            <div className="login-container">
                <h1 className="login-title">Iniciar Sesión</h1>
                
                <form onSubmit={handleLogin} className="login-form">
                    
                    {/* Campo de Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    
                    {/* Campo de Contraseña */}
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>

                    {/* Mensaje de Error */}
                    {error && <p className="error-message">{error}</p>}
                    
                    {/* Botón de Enviar */}
                    <button type="submit" className="login-button">
                        ACCEDER
                    </button>
                </form>
                <SocialLoginButtons />

                <p className="register-link-text">
                    ¿Aún no tienes cuenta? <Link to="/register" className="register-link">Regístrate</Link>
                </p>
            </div>
        </main>
    );
};

export default LoginPage;