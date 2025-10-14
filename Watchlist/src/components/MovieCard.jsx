import Button from "./Button";

const MovieCard = ({ title, image, movie, onAdd, isInWatchlist }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden w-64 hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-4 text-center flex flex-col gap-3">
        <h3 className="text-lg font-semibold truncate">{title}</h3>

        {/*Usamos el componente Button */}
        <Button movie={movie} onAdd={onAdd} isInWatchlist={isInWatchlist} />
      </div>
    </div>
  );
};

export default MovieCard;
