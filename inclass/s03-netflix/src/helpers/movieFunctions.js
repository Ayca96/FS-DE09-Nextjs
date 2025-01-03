const API_KEY = process.env.TMDB_KEY;

export const getirMovies = async (type) => {
  try {
   const res= await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
    );

   const {results}= await res.json()
   console.log(results);
   
  } catch (error) {}
};
