import logo from "../assets/logo.png";

const Header = ({ openModal, count }) => {
  return (
    <header className="flex justify-between items-center bg-gray-900 px-6 py-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <h1 className="text-lg font-bold font-serif text-white tracking-wide sm:text-3xl">
          CineManía
        </h1>
      </div>

      {/* Menú */}
      <nav className="flex items-center gap-6 text-white text-base uppercase font-medium cursor-pointer">
        {/* Ver mi lista */}
        <div
          onClick={openModal}
          className="relative flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300 whitespace-nowrap"
        >
          <i className="bi bi-bookmarks-fill text-xl"></i>
          <span className="tracking-wide">Ver mi lista</span>
          {count > 0  && (
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
              {count}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
