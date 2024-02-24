import React from 'react'
import Dropdown from './Dropdown'
import { ShowList } from './ShowList'
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter } from '../store/showReducer';

export const Main = () => {
    
    const {isFilter, filterValues} = useSelector(state => state.show)

    const dispatch = useDispatch()


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
