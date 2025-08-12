import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import OfferImage from "./OfferImage";

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  image: string;
  buttonText: string;
  backgroundColor: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "¡Oferta Especial!",
    description: "Hasta 50% de descuento en productos seleccionados",
    discount: "50%",
    image: "/megaphone-with-banner-tag-sign-exclusive-offer-flat-illustration-vector.jpg",
    buttonText: "Comprar Ahora",
    backgroundColor: "bg-gradient-to-r from-red-500 to-pink-500",
  },
  {
    id: 2,
    title: "Envío Gratis",
    description: "En compras superiores a $50",
    discount: "GRATIS",
    image: "/oferta-venta-etiqueta-banner-oferta-descuento-promocion_157027-1250.avif",
    buttonText: "Ver Productos",
    backgroundColor: "bg-gradient-to-r from-blue-500 to-purple-500",
  },
  {
    id: 3,
    title: "Nueva Colección",
    description: "Descubre las últimas tendencias",
    discount: "30%",
    image: "/oferta-venta-etiqueta-banner-oferta-descuento-promocion_157027-1250.avif",
    buttonText: "Explorar",
    backgroundColor: "bg-gradient-to-r from-green-500 to-teal-500",
  },
];

const OffersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-8">
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" :
                index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div className={`h-full ${offer.backgroundColor} flex items-center 
            justify-between px-8 md:px-16`}>
              <div className="text-white max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{offer.title}</h2>
                <p className="text-lg md:text-xl mb-6 opacity-90">{offer.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl font-bold text-yellow-300">
                    {offer.discount}
                  </span>
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-lg
                  font-semibold hover:bg-gray-100 transition-colors">
                    {offer.buttonText}
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <OfferImage src={offer.image} alt={offer.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80
        hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Oferta anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80
        hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Siguiente oferta"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a oferta ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersCarousel;
