import React, { useContext, useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { fetchConcerts } from '../http/concertsApi'
import { ShowList } from './ShowList'
import { MyContext } from '..'
// import { fetchConcerts } from '../http/concertsApi'
import { FaFilterCircleXmark } from "react-icons/fa6";

export const Main = () => {
    
    const {isFilter, filters, clearFilter, filterValues} = useContext(MyContext)

    return (
        <div className='main'>
            <h1>Checkout these amazing concerts in Graz.</h1>
            <div className="filterPanel">
                <Dropdown title="Artist" options={filterValues.artist}/>
                <Dropdown title="Location" options={filterValues.location}/>
                <Dropdown title="Date" options={filterValues.date}/>
                {isFilter ? <FaFilterCircleXmark  size={25} className='filterCancel' onClick={ () => clearFilter() } /> : null}
            </div>
            <ShowList />
        </div>
    )
}
