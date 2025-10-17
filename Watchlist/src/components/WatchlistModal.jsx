// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WatchlistModal = ({ watchlist, onRemove, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-end z-50 pointer-events-none">
      {/* Solo el modal es abierto*/}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="pointer-events-auto w-80 sm:w-96 h-full p-6 overflow-y-auto shadow-2xl bg-gray-900 border-l border-gray-700 rounded-l-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
          <div className="flex items-center gap-2">
            <i className="bi bi-film text-2xl text-amber-400"></i>
            <h2 className="text-xl font-bold text-amber-400">Mi Watchlist</h2>
          </div>

          <button
            onClick={onClose}
            className="text-white hover:text-amber-400 text-2xl transition-colors duration-300"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Contenido */}
        {watchlist.length === 0 ? (
          <p className="text-gray-200 text-center mt-10">Tu lista está vacía</p>
        ) : (
          <div className="flex flex-col gap-5">
            {watchlist.map((movie) => (
              <div
                key={movie.id}
                className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                <img
                  src={movie.imagen}
                  alt={movie.titulo}
                  className="w-16 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-white">
                    {movie.titulo}
                  </h3>
                </div>
                <button
                  onClick={() => onRemove(movie.id)}
                  className="text-red-400 hover:text-red-600 text-xl transition-colors duration-300"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default WatchlistModal;
