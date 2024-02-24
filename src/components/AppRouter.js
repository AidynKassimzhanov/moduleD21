import React from 'react'
import { Main } from './Main'
import {Routes, Route } from 'react-router-dom'
import { ReservationSeats } from './ReservationSeats'
import { HOME_ROUTE, SEATS_ROUTE } from '../consts'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path={HOME_ROUTE} element={ <Main /> } exact/>
            <Route path={SEATS_ROUTE} element={ <ReservationSeats /> } />
            {/* <Route path="/contact" component={Contact} />   */}
        </Routes>
    </div>
  )
}
