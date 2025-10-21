import React, { forwardRef, HTMLProps } from 'react';
import "./History.css";

// 1. Define the props for your component (if any)
interface ChildProps extends HTMLProps<HTMLElement> {
  opacity: number;
  tittle: string;
  sectionNumber: number;
  isReversed:boolean;
  button:string;
  message: string;
  message2: string;
  image: string

}

function splitText(txt: string) {
    const textoLimpio = txt
    .replace(/\\n/g, '\n')  // Reemplaza \n literales

  const lineas: string[] = textoLimpio.split('\n');
  return lineas.map((linea, index) => (
    <React.Fragment key={index}>
      {linea}
      {index < lineas.length - 1 && <br />}
    </React.Fragment>
  ));
}
const AboutSection = forwardRef<HTMLElement, ChildProps>((props, ref) => {

  

  const { opacity, tittle, button, message,isReversed, message2, image } = props;

  const sectionClasses = `about-section ${isReversed ? ' reverse-layout' : ''}`;
  return (
      <section id="about" className={sectionClasses} ref={ref}>
        {/* Columna Izquierda: Texto de la Historia */}
        <div
          className="story-text-container fade-element"
          style={{ opacity: opacity }}
        >
          {/* Usamos h2 para la jerarquía después del h1 del Hero */}
          <h2 className="story-title">
            {splitText(tittle)}

          </h2>

          <p className="story-paragraph">
            {message}
          </p>

          <p className="story-paragraph">
            {message2}

          </p>

          <a href="#manifiesto" className="story-cta-button">
            {button}
          </a>
        </div>

        {/* Columna Derecha: Imagen o Media */}
        <div
          className="story-media fade-element"
          style={{ opacity: opacity }}
        >
          <img
            src={image}
            alt="Proceso de fabricación artesanal y sostenible"
            className="process-image"
          />
        </div>
      </section>

  );
});



export default AboutSection;

export const AboutSectionLeft = forwardRef<HTMLElement, ChildProps>((props, ref) => {

  const { opacity, tittle, button, message, message2, image } = props;
  return (

      <section
        id="product-detail"
        className="about-section reverse-layout"
        ref={ref}
      >
        <div className="story-media" style={{ opacity: opacity }}>
          <img
            src={image}
            alt="Detalle de la pieza de moda artesanal"
            className="process-image"
          />
        </div>

        <div className="story-text-container" style={{ opacity: opacity }}>
          {/* Título y subtítulo del producto */}
          <h2 className="story-title">
            {splitText(tittle)}
          </h2>

          <p className="story-paragraph">
            {message}
            
          </p>

          <p className="story-paragraph">
            {message2}
          </p>

          <a href="#shop" className="story-cta-button">
            {button}
          </a>
        </div>
      </section>
  );
});
