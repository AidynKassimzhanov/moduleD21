import React, { useEffect } from 'react'
import { Show } from './Show'
import { SelectedSeats } from './SelectedSeats'
import { HOME_ROUTE, SHOW_SEATS_ROUTE } from '../consts'
import { useSelector } from 'react-redux'
import { EnterBookDetails } from './EnterBookDetails'
import { useNavigate } from 'react-router-dom'

export const Booking = () => {

    const {show} = useSelector(state => state.seatings)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (show.id === null) {
                return navigate(HOME_ROUTE)
        }
    },[show, navigate])

    return (
        <div className='bookingPage'>
            <Show />
            {/* { show.id !== null ? <Show /> : <div> Showis not found... </div>}          */}
            <div className='booking'>
                <SelectedSeats route={SHOW_SEATS_ROUTE} buttonTitle={"<- Change Seats"}/>
                <EnterBookDetails />
            </div>
        </div> 
        
    )
}
