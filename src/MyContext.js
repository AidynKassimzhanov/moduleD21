
import { fetchConcerts } from './http/concertsApi';
import React, { useEffect, useState } from 'react';

export const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
    
  const [isFilter, setIsFilter] = useState(false)
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [filterValues, setFilterValues] =useState({date: [], location: [], artist: []})

  const [filters, setFilters] = useState({ date: '', location: '', artist: '' });

  const updateFilter = (field, value) => {
    const newFilters = { ...filters, [field]: value }
    setFilters(newFilters); 
  }

  const clearFilter = () => {
    setFilters({ date: '', location: '', artist: '' })
  }

  // Фильтрация данных и меняется state isFilter при каждом изменении значении фильтров и сбрасывании фильтра
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
    setIsFilter(filters.date !== '' || filters.location !== '' || filters.artist !== '') 
  }, [filters, shows])


  // меняется список данных для каждых полей состояния filterValues при каждом изменении основных данных
  useEffect(() => {
    setFilterValues({
      artist : [...new Set(filteredShows.map(show => show.artist))], 
      location : [...new Set(filteredShows.map(show => show.location.name))], 
      date : [...new Set(filteredShows.map(show => show.start.slice(0, 10)))]
    })
  }, [filteredShows])

  // Загрузка данных при монтировании компонента
  useEffect(() => {
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
    <MyContext.Provider value={{isFilter, shows, filterValues, filters, filteredShows, updateFilter, clearFilter}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider