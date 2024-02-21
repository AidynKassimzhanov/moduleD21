import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { fetchConcerts } from '../http/concertsApi'
import { ShowList } from './ShowList'
// import { fetchConcerts } from '../http/concertsApi'

export const Main = () => {

    const [concerts, setConcerts] = useState([])
    const [artists, setArtists] = useState([])
    const [locations, setLocations] = useState([])
    const [dates, setDates] = useState([])

    useEffect(() => {
        fetchConcerts().then(data => {
            const shows = data.concerts.flatMap(concert =>
                concert.shows.map(show => ({
                    ...show,
                    artist: concert.artist,
                    location: concert.location
                }))
            )
            setConcerts(shows)
            setArtists(data.concerts.map(event => event.artist) || [])
            setLocations(data.concerts.map(event => event.location.name) || [])
            setDates(data.concerts.flatMap(event => event.shows.map(show => show.start)) || [])

        })
            .catch( error => console.error('Error fetching concerts:', error))
    }, [])

    return (
        <div className='main'>
            <h1>Checkout these amazing concerts in Graz.</h1>
            <div className="filterPanel">
                {/* {concerts} */}
                <Dropdown title="Artist" options={artists}/>
                <Dropdown title="Location" options={locations}/>
                <Dropdown title="Date" options={dates} dates={"dates"}/>
            </div>
            <ShowList concerts={concerts}/>
        </div>
    )
}
