import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import videoSource from '../../assets/video2.mp4';
import SocialLoginButtons from './SocialLoginButtons';

const RegisterPage: React.FC = () => {

    useState('');
    return(


        <main className="login-page-wrapper">
            <video className="video-background" autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
                Tu navegador no soporta el tag de video.
            </video>
            <div className="login-container">
                <h1 className="login-title">Crear Cuenta</h1>
                <form className="login-form">
                    {/* Campo de Nombre */}
                    <div className="form-group">
                        <label htmlFor="name">Nombre Completo</label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            required
                        />
                    </div>
                    {/* Campo de Email */}
                    <div className="form-group">    
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"  
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
                            className="form-input"
                            required
                        />
                    </div>    
      
                    {/* Botón de Enviar */}
                    <button type="submit" className="login-button">
                        REGISTRARSE
                    </button>
                    
                    
                </form>
                <SocialLoginButtons />
                <p className="register-link-text">
                    ¿Ya tienes cuenta? <Link to="/login" className="login-link">Inicia Sesión</Link>
                </p>
            </div>
        </main>
    );
}
export default RegisterPage;