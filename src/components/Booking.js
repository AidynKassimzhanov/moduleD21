import React from 'react'
import { Show } from './Show'
import { SelectedSeats } from './SelectedSeats'
import { SHOW_SEATS_ROUTE } from '../consts'
import { useSelector } from 'react-redux'

export const Booking = () => {

    const {show} = useSelector(state => state.seatings)

    return (
        <div className='bookingPage'>
            <Show />
            <div className='booking'>
                <SelectedSeats route={SHOW_SEATS_ROUTE} buttonTitle={"<- Change Seats"}/>
            </div>
        </div>
    )
}
