import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Principal/Nabvar"
import Image from "./components/Principal/Image"
import AboutSection from "./components/Principal/History"
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetail/ProductDetail";
import Footer from "./components/Principal/Footer"


function App() {

const TOTAL_SECTIONS = 3; // Número de secciones que tienes
const FADE_START_POINT_MULTIPLIER: number = 0.9; 

  const [opacityStates, setOpacityStates] = useState(
    Array.from({ length: TOTAL_SECTIONS }, () => 1)
  );

    const sectionRefs = useRef(
    Array.from({ length: TOTAL_SECTIONS }, () => React.createRef<HTMLElement>())
  );

    useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight ;
      
      // Iterar sobre todas las referencias para calcular la opacidad de cada una
      sectionRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const element = ref.current;
          const rect = element.getBoundingClientRect();
          
          // Usamos rect.top para calcular el fade cuando el elemento sube
          const elementTop = rect.top; 
          
          // El punto donde empieza el desvanecimiento (30% del viewport)
          const fadeStartPoint = windowHeight * FADE_START_POINT_MULTIPLIER;

          const fadeEnd = window.innerHeight * 0.1;   // Fully visible when 30% of the viewport is visible
          
          let newOpacity = 2;
          
          if (elementTop  < 0 ) {
            newOpacity = elementTop / fadeStartPoint ;
          }

          newOpacity = Math.max(0, 1 - (elementTop - fadeEnd) / (fadeStartPoint - fadeEnd));
          
          // Si la opacidad cambió, actualiza el estado solo para esta sección
          if (newOpacity !== opacityStates[index]) {
            setOpacityStates(prevOpacities => {
              const newArray = [...prevOpacities];
              newArray[index] = newOpacity;
              return newArray;
            });
          }
        }
      });
    };

 window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opacityStates]); 

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Image />

              <AboutSection
                ref={sectionRefs.current[0]}
                opacity={opacityStates[0]}
                tittle=" Nuestra Esencia:
        Moda Lenta, Corazón Artesanal."
                message="Todo surge de la necesidad de volver a valorar el trabajo lento y la
        calidad. Cada pieza es un manifiesto de la **Moda Ética**, donde el
        diseño atemporal se encuentra con la responsabilidad sostenible."
                message2="Explora la exclusividad de nuestra **producción limitada** y
        descubre cómo cada puntada cuenta la historia de una artesanía hecha
        a mano en [Tu Ciudad]."
                sectionNumber={0}
                image=""
                button="VER MANIFIESTO COMPLETO"
                isReversed={false}
              />

              <AboutSection
                ref={sectionRefs.current[1]}
                opacity={opacityStates[1]}
                tittle="Colección Exclusiva:
            Raíces Atemporales"
                message="Presentamos nuestra primera colección cápsula, inspirada en la
            **arquitectura orgánica** y fabricada con **algodón pima orgánico**
            certificado. Cada costura está pensada para la longevidad y la
            comodidad."
                message2="Los tonos neutros y la textura única de la tela son perfectos para
            un **armario cápsula** elegante y consciente. ¡Stock limitado!"
                sectionNumber={1}
                image=""
                button="VER LA COLECCIÓN AHORA"
                isReversed={true}
              />

              <AboutSection
                ref={sectionRefs.current[2]}
                opacity={opacityStates[2]}
                tittle=" Nuestra Esencia:
        Moda Lenta, Corazón Artesanal."
                message="Todo surge de la necesidad de volver a valorar el trabajo lento y la
        calidad. Cada pieza es un manifiesto de la **Moda Ética**, donde el
        diseño atemporal se encuentra con la responsabilidad sostenible."
                message2="Explora la exclusividad de nuestra **producción limitada** y
        descubre cómo cada puntada cuenta la historia de una artesanía hecha
        a mano en [Tu Ciudad]."
                sectionNumber={2}
                image=""
                button="VER MANIFIESTO COMPLETO"
                isReversed={false}
              />
            </>
          }
        />

        <Route path="/coleccion" element={<ProductPage />} />

        <Route path="/producto/:productId" element={<ProductDetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App
