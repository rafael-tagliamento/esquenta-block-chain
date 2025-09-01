import "../../App.css";
import React from "react";

const DescriptionSection = () => {
  return (
    <>
      <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <path
            id="line"
            d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </defs>
      </svg>

      <div className="absolute top-[120vh] left-0 w-full">
        <div className="h-full w-full bg-gray-900 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <img
              className="w-40 h-40 flex-shrink-0"
              src="/stellar-coin.png"
              alt="Moeda Stellar Lumens"
            />

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Fazemos{" "}
                <span className="btn">
                  {" "}
                  MAGIA
                  <svg className="button-stroke" viewBox="0 0 154 13">
                    <use href="#line"></use>
                  </svg>
                  <svg className="button-stroke" viewBox="0 0 154 13">
                    <use href="#line"></use>
                  </svg>
                </span>{" "}
                com sua chave de API
              </h2>
              <p className="mb-6 text-gray-300">
                Muitas vezes, investimos sem entender a fundo o desempenho e as
                tendências de nossas escolhas. Chega de suposições. Nossa
                plataforma de análise revela as camadas mais profundas do seu
                perfil financeiro, expondo o comportamento real das suas Stellar Lumens e
                o impacto de cada decisão. Tenha o controle total sobre seus
                criptos e transforme incertezas em oportunidades.
              </p>
              <p className="mb-4 text-gray-300">
                Para começar, você precisará de uma chave de API da Stellar.
                Siga os passos abaixo para obtê-la:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-6">
                <li>
                  Visite o <a href="https://www.lab.stellar.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-purple-900">site da Stellar</a> e crie uma conta.
                </li>
                <li>
                  Após a criação da conta, acesse o painel de desenvolvedor.
                </li>
                <li>Crie uma nova chave de API e copie-a.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionSection;
