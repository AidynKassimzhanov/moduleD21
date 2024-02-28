import React from 'react'
import { Seat } from './Seat';

export const Row = (props) => {
    const row = props.row

    return (
        <div className='rows'>
            <div className='rowName'>
                {row.name}
            </div>
            <div className='seats'>
                {row.rowsAvailables.map(seat => 
                    <Seat 
                        key={seat.id} 
                        seat={seat} 
                        row={row} 
                        // className={seat.isBooked ? "booked" : "free"}
                        // className={seat.isReserv ? "reserv" : "free"}
                    />
                )}
            </div>
        </div>
    )
}
