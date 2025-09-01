import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import AboutUs from "../components/home/AboutUs";
import ApiKeySection from "../components/home/ApiKeySection";
import DescriptionSection from "../components/home/DescriptionSection";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate(); 

  const handleReportGenerated = (reportData) => {
    if (reportData && reportData.account_id) {
      navigate(`/acesso/${reportData.account_id}`, { state: { reportData } });
    } else {
      alert("Não foi possível obter os dados do relatório para navegar.");
    }
  };

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
      <ApiKeySection 
        textTranslateY={textTranslateY} 
        textOpacity={textOpacity} 
        onReportGenerated={handleReportGenerated}
      />
      <div className="relative">
        <DescriptionSection />

        <div className="absolute top-[180vh] w-full">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
