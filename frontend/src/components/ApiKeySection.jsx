const ApiKeySection = () => {
  return (
    <div className="absolute top-[120vh] left-0 w-full">
      <div className="h-full w-full bg-gray-900 flex items-center justify-center p-4">
        
        <div className="relative w-full max-w-4xl p-8 flex items-center gap-8 text-left">
          
          <img 
            className="w-40 h-40 flex-shrink-0"
            src="/stellar-coin.png" 
            alt="Moeda Stellar Lumens" 
          />
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Obtenha sua chave de API <span className="risco-de-lapis">gratuita</span></h2>
            <p className="mb-6 text-gray-300">Para começar a usar nosso serviço, você precisará de uma chave de API. Siga os passos abaixo para obtê-la:</p>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>Visite o site da Stellar e crie uma conta.</li>
              <li>Após a criação da conta, acesse o painel de desenvolvedor.</li>
              <li>Crie uma nova chave de API e copie-a.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeySection;