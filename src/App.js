import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView';
import ErrorNotFound from './components/404ErrorView'
import { Routes, Route } from 'react-router-dom';
/* movie database api 8be00d67 */

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState(''); 

  useEffect(() => {
    if (searchText) {
      fetch(`https://www.omdbapi.com/?apikey=8be00d67&s=${searchText}`)
      .then(response => response.json())
      .then(data => {
        setSearchResult(data.Search)
      })
    }
    }, [searchText])
    

  return (
    <div className="App">          
      <Navbar setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/search' element={<SearchView keyword={searchText} searchResult={searchResult}/>} />
        <Route path='/movies/:id' element={<MovieView />}

        />
        <Route path='*' element={<ErrorNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
