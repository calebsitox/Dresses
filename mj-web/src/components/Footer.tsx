import React from 'react';
import './Footer.css'; // Importamos el archivo de estilos


/**
 * Componente funcional simple para el pie de página de la aplicación.
 */
const Footer: React.FC = () => {
    // Obtenemos el año actual para los derechos de autor
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p className="footer-copyright">
                    &copy; {currentYear} [Maria Jose Castaño Serna]. Todos los derechos reservados.
                </p>
                {/* Opcional: Puedes añadir enlaces, redes sociales o información adicional aquí */}
                <div className="footer-links">
                    {/* <a href="/privacidad">Política de Privacidad</a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;