import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo y título */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-20 h-20 rounded-full" />
          <span className="font-bold text-2xl">CineManía</span>
        </div>

        {/* Links de navegación */}
        <div className="flex gap-8 text-gray-300">
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">
            Inicio
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">
            Películas
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">
            Contacto
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">
            <i className="bi bi-twitter"></i>
          </a>
        </div>

      </div>

      {/* Copy */}
      <p className="text-gray-400 text-center mt-6 text-sm">
        &copy; {new Date().getFullYear()} CineManía. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
