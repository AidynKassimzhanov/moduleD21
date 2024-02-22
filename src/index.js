import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { fetchConcerts } from './http/concertsApi';

export const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {

  const [shows, setShows] = useState([]);

  const [filteredShows, setFilteredShows] = useState([]);

  const [filterValues, setFilterValues] =useState({date: [], location: [], artist: []})

  const [filters, setFilters] = useState({ date: '', location: '', artist: '' });

  const updateFilter = (field, value) => {
    const newFilters = { ...filters, [field]: value }
    setFilters(newFilters); 
  }

useEffect(() => {
  const filteredData = shows.filter(item => {
    const { date, location, artist } = filters;
    return (
      (date === '' || item.start.slice(0, 10) === date) &&
      (location === '' || item.location.name === location) &&
      (artist === '' || item.artist === artist)
    );
  });
  setFilteredShows(filteredData)
}, [filters])



useEffect(() => {
    
  setFilterValues({
    artist : [...new Set(filteredShows.map(show => show.artist))], 
    location : [...new Set(filteredShows.map(show => show.location.name))], 
    date : [...new Set(filteredShows.map(show => show.start.slice(0, 10)))]
  })

}, [filteredShows])

useEffect(() => {
    // Загрузка данных при монтировании компонента
  fetchConcerts()
    .then(data => {
      const showsArray = data.concerts.flatMap(concert =>
          concert.shows.map(show => ({
              ...show,
              artist: concert.artist,
              location: concert.location
          }))
      )
      setShows(showsArray)
      setFilteredShows(showsArray)

      setFilterValues({
          artist : [...new Set(showsArray.map(show => show.artist))], 
          location : [...new Set(showsArray.map(show => show.location.name))], 
          date : [...new Set(showsArray.map(show => show.start.slice(0, 10)))]
      })
    })
    // .catch()
  }, []);

  return (
    <MyContext.Provider value={{shows, filterValues, filters, filteredShows, updateFilter}}>
      {children}
    </MyContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);


