import ArrowRightIcon from '../icons/ArrowRightIcon';

const HeroSection = ({ textTranslateY, textOpacity }) => {
  return (
    <div className="h-screen w-full fixed top-0 left-0">
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(/galaxy.png)`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60"></div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4"
        style={{
          transform: `translateY(${textTranslateY}px)`,
          opacity: textOpacity,
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Sua cripto<br />analisada com <span className="text-violet-600">inteligêncIA</span>
        </h1>

        <div className="flex w-full max-w-lg mt-16 shadow-lg shadow-violet-600/10">
          <input
            type="text"
            placeholder="Cole sua chave aqui..."
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-l-md p-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
            aria-label="Insira sua chave"
          />
          <button
            className="bg-violet-500 hover:bg-violet-600 text-black p-4 rounded-r-md flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Analisar com a chave"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;