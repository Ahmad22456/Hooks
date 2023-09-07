import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './components/Movies';
import MovieList from './components/lists/MovieList';
import Filter from './Filter';
import FilterList from './components/lists/FilterList';
import AddList from './components/lists/AddList';

function App() {
  
  const [moviesFilter, setMoviesFilter] = useState([])
  const [moviesAdded, setMoviesAdd] = useState([])

  const applyFilter = (result) => {

    const filterList = Movies.filter((x) => {

      if(x.title === result.title || x.rating === result.rating) {
        return true;
      } else {
        return false
      }
    })

    setMoviesFilter(filterList)
  }

  const addMovie = (selected) => {

    if(moviesAdded.find((x) => x.title === selected)){

      return

    } else {
      
    const addList = Movies.filter((x) => {

      if(x.title === selected) {
        return true;
      } else {
        return false
      }
    })

    if(addList.length > 0) {
      const newMovieAdded = [...moviesAdded, addList[0]]
      setMoviesAdd(newMovieAdded)
      // setMoviesAdd([...moviesAdded, addList[0]])
    }

    // setMoviesAdd(moviesAdded.push(addList[0]))
    }
  }

  // console.log(moviesAdded)
  return (
    <div className="App">
      <h1 className="AppText">Movie List:</h1>
      <MovieList select={addMovie}/>
      <Filter onSearch={applyFilter}/>
      <FilterList list={moviesFilter} select={addMovie}/>
      <AddList newAdd={moviesAdded}/>
    </div>
  );
}

export default App;
