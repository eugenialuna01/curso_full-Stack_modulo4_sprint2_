import MovieCard from "./MovieCard";

const movies = [
  { id: 1, titulo: "Regalo maldito", imagen: "https://external-preview.redd.it/vicious-dakota-fanning-will-star-in-2025-horror-movie-from-v0-ORwkh_wOpxHDveOUaPmZBRLJmCo0OV0l5yWKLZartqY.jpg?auto=webp&s=54b31603649e51c86b3de4ca03fcbf1e16ebbf29" },
  { id: 2, titulo: "007: Spectre", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQY6qTkJPZNBeRLgueFPliXUPYSGG13BCwHOfVxqCvsuJaxBs" },
  { id: 3, titulo: "Superman", imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5kpHGfBNwXEl1mnr2LkSRjRIe1oqKe5VxbbVk42niymTQVzYR" },
  { id: 4, titulo: "Sangre blanca", imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_czoOOfn9aXV-S6bBaO6QiQEmkcrnyfn0T_LRBK4YE0wW0Qbf" },
  { id: 5, titulo: "Agua para elefantes", imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTkz8QBLu3G9O42g-7qH3Q734CqEjn5nI-wcXByEmkz2k1HNlJ" },
  { id: 6, titulo: "La sospecha", imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyTtZVf6vbxW96OUnaS_ejEeGFTsbJF8aAQY828HtpPMdOPoTe" },
  { id: 7, titulo: "Thunderbolts", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gD7oA1Lb_GAEdrJOkWbGwT3EUg93RpQbki8byIW89z9A1kVw" },
  { id: 8, titulo: "Juego sucio", imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKJ0wcDJPCwCh1gQJ3z76DynOsFQKzvLrFEiSlZ3qqhDZ3OBfS" },
  { id: 9, titulo: "Hércules", imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTpi3ffFwwTYGBs7yXcME8oEGfhor7j_t6Cb9e_MQxj7R4dtNXx" },
  { id: 10, titulo: "Steve", imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBchPqaocDfGyrUQ8LachxQ0kAbopiyIuO_2ndRvGUyY4k_Nlz"},
  { id: 11, titulo: "The Batman", imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrmuWJLypZIsZC7yKIMPxxF45UYkJLv5Kg2i5AFcsWuGJnlMPR"},
  { id: 12, titulo: "Exorcismo: El ritual", imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSt4USCFqbCHnfYkYzuWzxx8UUAEQP2-bVBTT0xK9d6f8FK8szW"},
  { id: 13, titulo: "Mission: Impossible", imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmEaEXk_fLPybjI2v3YaYAG-q0KaaH1gA3AbGyX-fVMjJcJP2j"},
  { id: 14, titulo: "Spider-Man: de regreso a casa", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTca5mlD6AS7A4UcmyR1ooultf-fndLvrpUAeoGLIxWSNHyOoa8"},
  { id: 15, titulo: "X-Men Orígenes", imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOl3T_pc5w9z_gVWTLqfgMNUf7v4zNWXU--KElqVEQQz3HqxBd"}

]

const MovieList = ({ onAdd, watchlist }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 py-30">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.titulo}
          image={movie.imagen}
          movie={movie}
          onAdd={onAdd}
          isInWatchlist={watchlist.some((m) => m.id === movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;