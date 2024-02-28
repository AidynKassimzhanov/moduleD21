import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { BOOKING_ROUTE, HOME_ROUTE, SHOW_SEATS_ROUTE, TICKETS_ROUTE } from '../consts'
import { Main } from './MainPage'
import { ShowSeatings } from './ShowSeatingsPage'
import { Booking } from './BookingPage'
import { TicketsPage } from './TicketsPage'


export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path={HOME_ROUTE} element={ <Main /> } exact/>
            <Route path={SHOW_SEATS_ROUTE + '/:id'} element={ <ShowSeatings /> } exact/>
            <Route path={BOOKING_ROUTE} element={ <Booking /> } exact/>
            <Route path={TICKETS_ROUTE} element={ <TicketsPage /> } exact/>
            {/* <Route path="/contact" component={Contact} />   */}
        </Routes>
    </div>
  )
}
