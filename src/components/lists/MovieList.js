import MovieCard from "../cards/MovieCard";
import Movies from "../Movies";


function MovieList({select}) {
    return (
        <div>
            {Movies.map((x) => (
                <MovieCard title={x.title} description={x.description} posterURL={x.posterURL} rating={x.rating} add={select}/>
            ))}
        </div>
    )
}

export default MovieList