import React, { useEffect } from 'react'
import Dropdown from './Dropdown'
import { ShowList } from './ShowList'
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialData, setFilterValues, setFilteredShows, setIsFilter, clearFilter } from '../store/showReducer';

export const Main = () => {
    
    const {isFilter, filterValues} = useSelector(state => state.show)

    const dispatch = useDispatch()
    const { filters, shows, loading, error} = useSelector(state => state.show);
  
    //загрузка начальных данных
    useEffect(() => {
      dispatch(fetchInitialData());
      // console.log(shows)
    }, [dispatch]);
  
    useEffect(() => {
      if (!loading) {
        dispatch(setFilteredShows(shows));
        dispatch(setFilterValues({
          artist: [...new Set(shows.map(show => show.artist))],
          location: [...new Set(shows.map(show => show.location.name))],
          date: [...new Set(shows.map(show => show.start.slice(0, 10)))]
        }));
      }
    }, [loading, dispatch, shows]);
  
    useEffect(() => {
        const filteredData = shows.filter(item => {
          const { date, location, artist } = filters;
          return (
            (date === '' || item.start.slice(0, 10) === date) &&
            (location === '' || item.location.name === location) &&
            (artist === '' || item.artist === artist)
          );
        });
        dispatch(setFilteredShows(filteredData))
        dispatch(setIsFilter(filters.date !== '' || filters.location !== '' || filters.artist !== ''))
    }, [filters, dispatch, shows])
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='main'>
            <h1>Checkout these amazing concerts in Graz.</h1>
            <div className="filterPanel">
                <Dropdown title="Artist" options={filterValues.artist}/>
                <Dropdown title="Location" options={filterValues.location}/>
                <Dropdown title="Date" options={filterValues.date}/>
                {isFilter ? <FaFilterCircleXmark  size={25} className='filterCancel' onClick={ () => dispatch(clearFilter()) } /> : null}
            </div>
            <ShowList />
        </div>
    )
}
