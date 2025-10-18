import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* BARRA PRINCIPAL */}
      <nav className="responsive-navbar">
        
        {/* Botón de Menú (VISIBLE SÓLO EN MÓVILES) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        {/* Grupo de enlaces a la izquierda (OCULTO EN MÓVILES) */}
        <div className="nav-links-left">
          <Link to="/" className="nav-link">Inicio</Link>
          <a href="#about" className="nav-link">Acerca de</a>
        </div>

        {/* Nombre/Logo en el centro (VISIBLE SIEMPRE) */}
        <div className="nav-logo-center">
          MariaJose
        </div>
        
        {/* Grupo de enlaces a la derecha (OCULTO EN MÓVILES) */}
        <div className="nav-links-right">
          <Link to="/coleccion" className="nav-link">Colección</Link>
          <a href="#contact" className="nav-link">Contacto</a>
        </div>
      </nav>

      {/* MENÚ LATERAL (SIDE-MENU) - Aparece en móviles */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        {/* Los enlaces completos van aquí */}
        <a href="#home" className="menu-link" onClick={toggleMenu}>Inicio</a>
        <a href="#about" className="menu-link" onClick={toggleMenu}>Acerca de</a>
        <a href="#services" className="menu-link" onClick={toggleMenu}>Servicios</a>
        <a href="#contact" className="menu-link" onClick={toggleMenu}>Contacto</a>
      </div>
      
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
