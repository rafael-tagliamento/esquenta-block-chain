import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importe o hook de navegação

import AboutUs from "../components/home/AboutUs";
import HeroSection from "../components/home/HeroSection";
import ApiKeySection from "../components/home/ApiKeySection";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textTranslateY =
    scrollY > window.innerHeight * 0.6
      ? -(scrollY - window.innerHeight * 0.6)
      : 0;

  const divisor = window.innerHeight * 0.8;
  const textOpacity = divisor > 0 ? Math.max(0, 1 - scrollY / divisor) : 1;

  return (
    <div className="bg-black text-white font-sans" style={{ height: "220vh" }}>
      <HeroSection textTranslateY={textTranslateY} textOpacity={textOpacity} />

      <div className="relative">
        <ApiKeySection />

        <div className="absolute top-[180vh] w-full">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
