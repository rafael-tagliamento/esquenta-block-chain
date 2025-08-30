import { FaFacebookF, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function InfoContato() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Navegação</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-violet-400 transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Termos de Serviço</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
          <ul className="space-y-2">
            <li><a href="mailto:contato@criptal.com" className="hover:text-violet-400 transition-colors">contato@criptal.com</a></li>
            <li><p>+55 (19) 1234-5678</p></li>
            <li><p>Campinas, Brasil</p></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Siga-nos</h3>
          <div className="flex justify-center md:justify-start gap-4">

            <a 
              href="https://facebook.com/criptal" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Link para o Facebook" 
              className="w-10 h-10 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>

            <a 
              href="https://instagram.com/criptal" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Link para o Instagram" 
              className="w-10 h-10 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors"
            >
              <FaInstagram className="text-white text-xl" />
            </a>

            <a 
              href="https://twitter.com/criptal" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Link para o Twitter" 
              className="w-10 h-10 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors"
            >
              <FaSquareXTwitter className="text-white text-xl" />
            </a>

            <a 
              href="https://linkedin.com/in/criptal" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Link para o LinkedIn" 
              className="w-10 h-10 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Criptal. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}