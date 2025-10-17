const Button = ({ movie, onAdd, isInWatchlist }) => {
  return (
    <button
      onClick={() => onAdd(movie)}
      disabled={isInWatchlist}
      className={`w-full py-2 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 
        ${isInWatchlist
          ? "bg-green-600 cursor-not-allowed"
          : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
      }`}
    >
      {isInWatchlist ? (
        <>
          <i className="bi bi-check-lg"></i> Agregado
        </>
      ) : (
        <>
          <i className="bi bi-plus-lg"></i> Agregar a mi lista
        </>
      )}
    </button>
  );
};

export default Button;
