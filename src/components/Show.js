import React from 'react'
import { useSelector } from 'react-redux'

export const Show = () => {
    const {show} = useSelector(state => state.seatings)
    return (
        <div>
                <h2>Book seats for you show</h2>
                <div className='show'>
                    <div > sadasdas
                        <p> {show.start.slice(0, 10)}</p>
                        <h4> {show.artist}</h4>
                        <p> {show.location.name}</p>
                        <p> {show.start.slice(11, 16)} - {show.end.slice(11, 16)} </p>
                    </div>
                </div>
        </div>
    )
}
