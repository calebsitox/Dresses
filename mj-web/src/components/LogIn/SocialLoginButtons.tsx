import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import './SocialLoginButtons.css';

const SocialLoginButtons: React.FC = () => {
    // 💡 Aquí irían las funciones de Firebase:
    // const handleGoogleLogin = () => { signInWithGoogle() };
    // const handleFacebookLogin = () => { signInWithFacebook() };

    return (
        <div className="social-login-container">
            {/* 1. Botón de Google */}
            <button 
                className="social-button google-button" 
                onClick={() => console.log('Iniciar sesión con Google')}
            >
                {/* Ícono de Google (SVG o Emoji) */}
                <span className="icon">
                    <FcGoogle size={20} />
                </span>
                <span>Google</span>
            </button>

            {/* 2. Botón de Facebook */}
            <button 
                className="social-button facebook-button" 
                onClick={() => console.log('Iniciar sesión con Facebook')}
            >
                {/* Ícono de Facebook (usando el carácter 'f' en su tipografía) */}
                <span className="icon">f</span>
                <span>Facebook</span>
            </button>
        </div>
    );
};

export default SocialLoginButtons;