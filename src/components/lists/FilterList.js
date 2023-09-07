import MovieCard from "../cards/MovieCard"

function FilterList({list, select}) {

    return (
        <div>
            {list.map((x) => (
                <MovieCard title={x.title} description={x.description} posterURL={x.posterURL} rating={x.rating} add={select}/>
            ))}
        </div>
    )
}

export default FilterList