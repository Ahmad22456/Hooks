import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import menu from './menu.svg'
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
    <>
      <nav className='navBar'>
        <p className='navText'>React Hooks</p>
        <img src={menu} alt='Menu'/>
      </nav>
      <div className="App">
        <h1 className="AppText">Movie List:</h1>
        <MovieList select={addMovie}/><hr/>
        <h1 className="AppText">Filtered List:</h1>
        <Filter onSearch={applyFilter}/>
        <FilterList list={moviesFilter} select={addMovie}/><hr/>
        <h1 className="AppText">Added Movies:</h1>
        <AddList newAdd={moviesAdded}/>
      </div>
    </>
  );
}

export default App;
