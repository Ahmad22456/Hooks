import '../../App.css';
import Movies from "../Movies";
import MovieCard from "../cards/MovieCard";


function MovieList({select}) {
    return (
        <div className="listMovie">
            {Movies.map((x) => (
                <MovieCard title={x.title} description={x.description} posterURL={x.posterURL} rating={x.rating} add={select}/>
            ))}
        </div>
    )
}

export default MovieList