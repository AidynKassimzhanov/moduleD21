import React, { useContext, useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { fetchConcerts } from '../http/concertsApi'
import { ShowList } from './ShowList'
import { MyContext } from '..'
// import { fetchConcerts } from '../http/concertsApi'

export const Main = () => {

    const {filterValues} = useContext(MyContext)
    
    return (
        <div className='main'>
            <h1>Checkout these amazing concerts in Graz.</h1>
            <div className="filterPanel">
                <Dropdown title="Artist" options={filterValues.artist}/>
                <Dropdown title="Location" options={filterValues.location}/>
                <Dropdown title="Date" options={filterValues.date}/>
            </div>
            {/* {console.log(filterValues)} */}
            <ShowList />
        </div>
    )
}
