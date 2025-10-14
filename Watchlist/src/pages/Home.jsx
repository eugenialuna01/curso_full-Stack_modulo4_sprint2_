import { useState } from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import WatchlistModal from "../components/WatchlistModal";
import useWatchlist from "../hooks/useWatchlist"; 
import Footer from "../components/Footer";

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header openModal={() => setIsModalOpen(true)} count={watchlist.length} />

      <MovieList watchlist={watchlist} onAdd={addToWatchlist} />

      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onRemove={removeFromWatchlist}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <Footer />
    </div>
  );
};

export default Home;
